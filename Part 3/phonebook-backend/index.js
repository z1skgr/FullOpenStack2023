const express = require('express')

const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(express.static('build'))

const cors = require('cors')

require('dotenv').config()
const Person = require('./models/person')

app.use(cors())

morgan('tiny')

morgan.token("data", (request) => {
  return request.method === "POST" ? JSON.stringify(request.body) : " ";
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);



let persons = [
]
 
  app.get('/', (request, response) => {
    response.send('<h1>Hello Exercise 3.15-18!</h1>')
  })
  

  
  app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons)
    })
  })

    
  app.get('/api/info', (request, response,next) => {
    const date_time = new Date().toString(); 
    Person.find({}).then(persons=>{
      response.send(`<p>Phonebook has info for ${persons.length} people.</p><p>${date_time}</p>`);
    }).catch((error)=>next(error));
  })




  app.get('/api/persons/:id', (request, response,next) => {
    Person.findById(request.params.id).then((people)=>{
      if(people){
        response.json(people)
      }else{
        response.status(404).end();
      }
    }).catch((error)=>next(error));

  })


  app.delete("/api/persons/:id", (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
      .then(() => {
        response.status(204).end();
      })
      .catch((error) => next(error));
  });

  const generateId = () => {
    const Id = Math.floor(Math.random() * 10000000);
    return Id
  }

  app.post('/api/persons', (request, response,next) => {
    const body = request.body
   
    const new_person = new Person ({
      id_number: generateId(),
      name: body.name,
      number: body.number
    })

    new_person.save().then((savedPerson)=>{
      response.json(savedPerson);
    }).catch((error)=>next(error))
  

  })

  app.put("/api/persons/:id", (request, response, next) => {
    const name = request.body.name;
    const number = request.body.number;
  
    Person.findByIdAndUpdate(
      request.params.id,
      { name, number },
      { new: true, runValidators: true, context: "query" }
    )
      .then((updatedPerson) => {
        response.json(updatedPerson);
      })
      .catch((error) => next(error));
  });


  const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
      }
      next(error)
}
  
  app.use(errorHandler);

  
const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})