const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({}).populate('blogs', { title: 1, author: 1, url: 1 })
  response.json(users)
})

usersRouter.get('/:id', async (request, response) => {
  const user = await User
    .findById(request.params.id)
    .populate('blogs', { title: 1, author: 1, url: 1, likes: 1 })

  if (user) {
    response.json(user)
  } else {
    response.status(404).end()
  }

})

usersRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body


  if ((!username || !password)) {
    return response.status(400).json({
      error: 'Must provide username and password',
    })
  }

  if (username.length < 3 || password.length < 3) {
    return response.status(400).json({
      error: 'username & password must be more than 2 characters long',
    })
  }


  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)



  const user = new User({
    username,
    name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = usersRouter