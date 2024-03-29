const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const express = require('express')
require('express-async-errors')
const app = express()


const cors = require('cors')



const mongoose = require('mongoose')

const blogRouter = require('./controllers/blogs')
const infoRouter = require('./controllers/info')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const morgan = require('morgan')

mongoose.set('strictQuery', false)


logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

morgan('tiny')
morgan.token('data', (request) => {
  return request.method === 'POST' ? JSON.stringify(request.body) : ' '
})


app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use(middleware.tokenExtractor)

app.use('/', infoRouter)
app.use('/api/blogs', middleware.userExtractor, blogRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(middleware.errorHandler)
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :data')
)


module.exports = app