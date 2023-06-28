const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const Book  = require('./models/book')
const Author = require('./models/author')
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT

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
  type Query {
    bookCount : Int!
    authorCount : Int!
    allAuthors: [Author!]!
    allBooks(author: String, genre: String): [Book!]!
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
    } 
    
      
  }, 
  Author: {
    bookCount: async (root) =>
    await Book.find({ author: root.id }).countDocuments()
  },
  Mutation: {
    addBook: async (root, args) => {
      let author = await Author.findOne({ name: args.author })

      if (!author) {
        author = new Author({ name: args.author })
        await author.save()
      }
      const book = new Book({ ...args, author: author.id })
      
      return book.save()
    },
    editAuthor: async (root, args) => {
      const author = await Author.findOne({ name: args.name })

      let updatedAuthor=null
      if(author){
        const filter = { name: args.name }
        const update = { born: args.setBornTo }
        updatedAuthor = await Author.findOneAndUpdate(
          filter, update, { new: true }
        )
      }      

      

      return updatedAuthor
    }
  }

  
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: PORT }
}).then(({ url }) => {
  console.log(`Server ready at ${ url }`)
})