const infoRouter = require('express').Router()

infoRouter.get('/', (request, response) => {
  response.send('<h1>Hello Exercise 4.12!</h1>')
})


module.exports = infoRouter