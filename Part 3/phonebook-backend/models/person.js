const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  id_number: String,
  name:  {
    type: String,
    minLength: 3,
    required: true
  },
  number:  {
    type: String,
    minLength: 8,
    validate: [{
      // Regex validator to allow only numbers
      validator: (number) => {
        return /^\d{2,3}-\d+$/.test(number)
      },
      msg: 'Invalid number',
    }
    ],
    required: [true, 'User phone number required']
  }
})


personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)