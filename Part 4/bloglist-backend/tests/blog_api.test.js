const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')
const User = require('../models/user')

const helper = require('./test_helper')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const config = require('../utils/config')

beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialBlogs)
})


describe('Test 4.8-4.12', () => {

  describe('part 4.8', () => {


    test('blogs are returned as json', async () => {
      await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

  })

  describe('part 4.9', () => {
    test('blogs have id property named id instead of _id', async () => {
      const response = await api.get('/api/blogs')

      const ids = response.body.map((blog) => blog.id)

      for (const id of ids) {
        expect(id).toBeDefined()
      }
    },100000)
  })

  describe('part 4.10', () => {
    let token = null
    beforeAll(async () => {
      await User.deleteMany({})

      const pwHash = await bcrypt.hash('12345', 10)
      const user = await new User({ username: 'name', pwHash }).save()

      const userToken = { username: 'author', id: user.id }
      return (token = jwt.sign(userToken, config.SECRET))
    })
    test('a valid blog can be added ', async () => {
      const newBlog = {
        title:'Technical University of Crete',
        author:'Christos Ziskas',
        url:'www.tuc.gr',
        likes:12
      }
      await api
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
      const BlogsAtEnd = await helper.blogsInDb()
      expect(BlogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

      const contents = BlogsAtEnd.map(n => n.title)
      expect(contents).toContain(
        'Technical University of Crete'
      )
    },100000)
  })

  describe('part 4.11', () => {
    let token = null
    beforeAll(async () => {
      await User.deleteMany({})

      const passwordHash = await bcrypt.hash('12345', 10)
      const user = await new User({ username: 'name', passwordHash }).save()

      const userForToken = { username: 'name', id: user.id }
      return (token = jwt.sign(userForToken, config.SECRET))
    })
    test('If the likes property is missing, it will default to 0 ', async () => {
      const newBlog = {
        title:'Technical University of Crete',
        author:'Christos Ziskas',
        url:'www.tuc.gr',
      }

      await api
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

      const blogsAtEnd = await helper.blogsInDb()
      const addedBlog = await blogsAtEnd.find(blog => blog.title === 'Technical University of Crete')
      expect(addedBlog.likes).toBe(0)
    },100000)
  })

  describe('part 4.12', () => {
    let token = null
    beforeAll(async () => {
      await User.deleteMany({})

      const passwordHash = await bcrypt.hash('12345', 10)
      const user = await new User({ username: 'name', passwordHash }).save()

      const userForToken = { username: 'name', id: user.id }
      return (token = jwt.sign(userForToken, config.SECRET))
    })
    test('fails with missing properties', async () =>
      await api.post('/api/blogs').send({}).expect(400))

    test('backend responds with status 400 if title and url are missing', async () => {
      const newBlog = {
        likes: 1,
      }

      await api
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(newBlog)
        .expect(400)

      const blogsAtEnd = await helper.blogsInDb()
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
    },100000)
  })



})

describe('Part 4.13-4.14',  () =>  {






  let token = null
  describe('Part 4.13', () => {

    beforeEach(async () => {
      await Blog.deleteMany({})
      await User.deleteMany({})

      const passwordHash = await bcrypt.hash('12345', 10)
      const user = await new User({ username: 'name', passwordHash }).save()

      const userForToken = { username: 'name', id: user.id }
      token = jwt.sign(userForToken, config.SECRET)

      const newBlog = {
        title: 'title',
        author: ' author',
        url: 'https://www.url.com',
      }

      await api
        .post('/api/blogs')
        .set('Authorization', `Bearer ${token}`)
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

      return token
    })


    test('status code 204 -id valid delete', async () => {

      const blogsAtStart = await Blog.find({}).populate('user')
      const blogToDelete = blogsAtStart[0]

      await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(204)

      const blogsAtEnd = await Blog.find({}).populate('user')
      expect(blogsAtEnd).toHaveLength(blogsAtStart.length - 1)

      const titles = blogsAtEnd.map((blog) => blog.title)
      expect(titles).not.toContain(blogToDelete.title)
    },100000)






  })

  describe('Part 4.14', () => {
    test('succeeds with status 200 - id valid update', async () => {
      const blogsAtStart = await helper.blogsInDb()
      const blogToUpdate = blogsAtStart[0]



      await api
        .put(`/api/blogs/${blogToUpdate.id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ likes: 12000 })
        .expect(200)

      const blogsAtEnd = await helper.blogsInDb()

      const updatedBlog = blogsAtEnd[0]

      const len=await helper.blogsLength()

      expect(blogsAtEnd).toHaveLength(len)
      expect(updatedBlog.likes).toBe(12000)
    },100000)
  })

})




afterAll(() => {
  mongoose.connection.close()
})
