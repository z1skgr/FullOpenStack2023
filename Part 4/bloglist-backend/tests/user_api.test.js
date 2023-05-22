const bcrypt = require('bcrypt')
const User = require('../models/user')

const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const mongoose = require("mongoose");

const helper = require('./test_helper')


describe('part 4.15-23', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'Maria', passwordHash })

    await user.save()
  })
  describe('part 4.15', () => {
    test('creation succeeds with a fresh username', async () => {
      const usersAtStart = await helper.usersInDb()

      const newUser = {
        username: 'mluukkai',
        name: 'Matti Luukkainen',
        password: 'salainen',
      }

      await api
        .post('/api/users')
        .send(newUser)
        .expect(201)
        .expect('Content-Type', /application\/json/)

      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

      const usernames = usersAtEnd.map(u => u.username)
      expect(usernames).toContain(newUser.username)
    },100000)})

  describe('part 4.16a', () => {
    test('creation fails with proper status code - short username', async () => {
      const usersAtStart = await helper.usersInDb()

      const newUser = {
        username: 'te',
        name: 'testuser',
        password: 'test',
      }

      const result = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)

      expect(result.body.error).toContain('username & password must be more than 2 characters long')

      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd).toHaveLength(usersAtStart.length)
    },100000)})



  describe('part 4.16b', () => {  test('creation fails with proper status code, short password', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'test',
      name: 'testuser',
      password: 'te',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('username & password must be more than 2 characters long')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)
  },100000)})

  describe('Ext test', ()=>{
    test('post statuscode 400 if username already taken', async () => {
      const usersAtStart = await helper.usersInDb()

      const newUser = {
        username: 'Maria',
        password: 'Maria'
      }

      const result = await api
        .post('/api/users')
        .send(newUser)
        .expect(400)
        .expect('Content-Type', /application\/json/)

      expect(result.body.error).toContain('`username` to be unique')

      const usersAtEnd = await helper.usersInDb()
      expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })
})


})