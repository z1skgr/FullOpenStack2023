const jwt = require('jsonwebtoken')
const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const config = require('../utils/config')


blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)

  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }

})

blogRouter.post('/', async (request, response) => {

  const body = request.body

  const decodedToken = jwt.verify(request.token, config.SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' })
  }
  const user = await User.findById(decodedToken.id)

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id
  })

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
  response.status(201).json(savedBlog)
})



blogRouter.delete('/:id', async (request, response) => {

  const token = request.token

  const user = request.user

  const decodedToken = jwt.verify(token, config.SECRET)

  if (!(token && decodedToken.id)) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const id = request.params.id
  const blog = await Blog.findById(id)

  if (blog.user.toString() === user.id.toString()) {
    await Blog.deleteOne({ _id: id })
    response.sendStatus(204).end()
  } else {
    response.status(401).json({ error: 'unauthorized operation' })
  }
})

blogRouter.put('/:id', async (request, response) => {
  const { body } = request
  const { id } = request.paramsnpm

  const blog = {
    likes: body.likes,
  }

  const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true })

  if (updatedBlog) {
    response.status(200).json(updatedBlog.toJSON())
  } else {
    response.status(404).end()
  }
})


module.exports = blogRouter