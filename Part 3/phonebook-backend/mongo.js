const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://cziskas:${password}@fullstackcluster.ur8whus.mongodb.net/mongo?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  id_number: String,
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  id_number:  Math.floor(1 + (Math.random() * (99))),
  name: name,
  number: number
})




if(process.argv.length===3){
  Person.find({}).then(result => {
    console.log('Phonebook')
    result.forEach(data => {
      console.log(`${data.name} ${data.number}`)
    })
    mongoose.connection.close()
  })
}else if(process.argv.length===5){
  person.save().then(() => {
    console.log(`Added ${name} with number ${number} to phonebook`)
    mongoose.connection.close()
  })
}else{
  console.log('Invalid Parameters')
  mongoose.connection.close()
}
