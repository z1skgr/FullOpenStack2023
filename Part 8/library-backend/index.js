const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const Book  = require('./models/book')
const Author = require('./models/author')
const User = require('./models/user')
require('dotenv').config()

const { GraphQLError } = require('graphql')
const jwt = require('jsonwebtoken')

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT
const PASSWORD = process.env.PASSWORD
const JWT_SECRET = process.env.JWT_SECRET

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })


/*
 * Suomi:
 * Saattaisi olla järkevämpää assosioida kirja ja sen tekijä tallettamalla kirjan yhteyteen tekijän nimen sijaan tekijän id
 * Yksinkertaisuuden vuoksi tallennamme kuitenkin kirjan yhteyteen tekijän nimen
 *
 * English:
 * It might make more sense to associate a book with its author by storing the author's id in the context of the book instead of the author's name
 * However, for simplicity, we will store the author's name in connection with the book
 *
 * Spanish:
 * Podría tener más sentido asociar un libro con su autor almacenando la id del autor en el contexto del libro en lugar del nombre del autor
 * Sin embargo, por simplicidad, almacenaremos el nombre del autor en conección con el libro
*/

/*
  you can remove the placeholder query once your first own has been implemented 
*/

const typeDefs = `
  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
  }
  type Token {
    value: String!
  }
  type Query {
    bookCount : Int!
    authorCount : Int!
    allAuthors: [Author!]!
    allBooks(author: String, genre: String): [Book!]!
    me: User
  }
  type Book {
    title: String!
    published: Int!
    author: Author!
    id: ID!
    genres: [String!]!
  }
  type Author{
    name: String!
    id: ID!
    born: Int
    bookCount: Int!
  }   
  type Mutation {
    addBook(
      title: String!
      published: Int!
      author: String!
      genres: [String!]!
    ): Book!
    editAuthor(
      name: String!
      setBornTo: Int!
    ): Author
    createUser(
      username: String!
      favoriteGenre: String!
    ): User
    login(
      username: String!
      password: String!
    ): Token
  }
`

const resolvers = {
  Query: {       
    bookCount : async () => Book.collection.countDocuments(),
    authorCount : () => Author.collection.countDocuments(),
    allAuthors : async () => await Author.find({}) ,
    allBooks : async (root, args) =>  {
      let books, author
      if (args.author && args.genre) {
        author = await Author.findOne({ name: args.author })
        // Filter book by genre and author
        books = await Book.find({
          $and: [ { author:  author.id  }, { genres:  args.genre }]
        }).populate("author")

        return books
      }
      else if (args.genre) {
        books = await Book.find({ genres: args.genre }).populate("author")
        return books
      }
      else if (args.author) {
        author = await Author.findOne({ name: args.author })
        books = await Book.find({ author: author.id } ).populate("author")
        return books
        
      } 
      books = await Book.find({}).populate("author")
      return books
    },
    me: (root, args, context) => {
      return context.currentUser
    }
    
      
  }, 
  Author: {
    bookCount: async (root) =>
    await Book.find({ author: root.id }).countDocuments()
  },
  Mutation: {
    addBook: async (root, args,context) => {
      let author = await Author.findOne({ name: args.author })
      const currentUser = context.currentUser

      if (!currentUser) {
        throw new GraphQLError('not authenticated', {
          extensions: {
            code: 'BAD_USER_INPUT',
          }
        })
      }

      if (!author) {
        author = new Author({ name: args.author })
        try{
          await author.save()
        }catch (error){
          throw new GraphQLError('Saving user failed', {
            extensions: {
              code: 'BAD_USER_INPUT',
              invalidArgs: args.name,
              error
            }
          })
        }
        
      }
      const book = new Book({ ...args, author: author.id })
      try{
        await book.save()
      }catch (error){
        throw new GraphQLError('Saving book failed', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.name,
            error
          }
        })
      }
      
      return book
    },
    editAuthor: async (root, args, context) => {
      let updatedAuthor=null
      const filter = { name: args.name }
      const update = { born: args.setBornTo }
      const currentUser = context.currentUser


      if (!currentUser) {
        throw new GraphQLError('not authenticated', {
          extensions: {
            code: 'BAD_USER_INPUT',
          }
        })
      }
       
      try{
        updatedAuthor = await Author.findOneAndUpdate(
          filter, update, { new: true }
        )
     }catch (error){
        throw new GraphQLError('Edit year failed', {
          extensions: {
            code: 'BAD_USER_INPUT',
            invalidArgs: args.name,
            error
          }
        })
      }
        
        
      return updatedAuthor
    },
    createUser: (root, args) => {
      const user = new User({ username: args.username,  favoriteGenre: args.favoriteGenre})
  
      return user.save()
        .catch(error => {
          throw new GraphQLError('Creating the user failed', {
            extensions: {
              code: 'BAD_USER_INPUT',
              invalidArgs: args.name,
              error
            }
          })
        })
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username })
  
      if ( !user || args.password !== PASSWORD ) {
        throw new GraphQLError('wrong credentials', {
          extensions: { code: 'BAD_USER_INPUT' }
        })        
      }
  
      const userForToken = {
        username: user.username,
        id: user._id,
      }
  
      return { value: jwt.sign(userForToken, JWT_SECRET) }
    }
  }

  
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: PORT },
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    //console.log(auth)
    //console.log(`Heei ${auth.toLowerCase().startsWith('Bearer ')}`)
    if (auth && auth.startsWith('Bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7), process.env.JWT_SECRET
      )
      const currentUser = await User.findById(decodedToken.id)
      /*console.log(currentUser) */
      return { currentUser }
    }
  }
  
}).then(({ url }) => {
  console.log(`Server ready at ${ url }`)
})