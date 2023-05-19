const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')

const helper = require('./test_helper')

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))
  const promises = blogObjects.map(blog => blog.save())

  await Promise.all(promises)
})


describe('part 4.8', () => {

  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

},100000)

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
  test('a valid blog can be added ', async () => {
    const newBlog = {
      title:'Technical University of Crete',
      author:'Christos Ziskas',
      url:'www.tuc.gr',
      likes:12
    }
    await api
      .post('/api/blogs')
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


afterAll(() => {
  mongoose.connection.close()
})
