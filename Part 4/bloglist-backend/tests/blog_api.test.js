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

  describe('part 4.11', () => {
    test('If the likes property is missing, it will default to 0 ', async () => {
      const newBlog = {
        title:'Technical University of Crete',
        author:'Christos Ziskas',
        url:'www.tuc.gr',
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

      const blogsAtEnd = await helper.blogsInDb()
      const addedBlog = await blogsAtEnd.find(blog => blog.title === 'Technical University of Crete')
      expect(addedBlog.likes).toBe(0)
    },100000)
  })

  describe('part 4.12', () => {
    test('fails with missing properties', async () =>
      await api.post('/api/blogs').send({}).expect(400))

    test('backend responds with status 400 if title and url are missing', async () => {
      const newBlog = {
        likes: 1,
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)

      const blogsAtEnd = await helper.blogsInDb()
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
    },100000)
  })



})

describe('Part 4.13-4.14',  () =>  {
  describe('Part 4.13', () => {
    test('status code 204 if id is valid when delete', async () => {
      const blogsAtStart = await helper.blogsInDb()
      const blogToDelete = blogsAtStart[0]

      await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204)

      const blogsAtEnd = await helper.blogsInDb()
      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1)

      const titles = blogsAtEnd.map((r) => r.title)
      expect(titles).not.toContain(blogToDelete.title)
    },100000)
  })


  describe('Part 4.14', () => {
    test('succeeds with status 200 if id is valid when update', async () => {
      const blogsAtStart = await helper.blogsInDb()
      const blogToUpdate = blogsAtStart[0]
      //console.log(blogsAtStart[0])
      //console.log(blogsAtStart[1])
      //console.log(blogToUpdate.id)

      await api
        .put(`/api/blogs/${blogToUpdate.id}`)
        .send({ likes: 10 })
        .expect(200)

      const blogsAtEnd = await helper.blogsInDb()

      const updatedBlog = blogsAtEnd[0]

      expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
      expect(updatedBlog.likes).toBe(10)
    },100000)
  })

})



afterAll(() => {
  mongoose.connection.close()
})
