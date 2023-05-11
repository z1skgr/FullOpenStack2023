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

app.use(cors())

let persons = [
]
 
  app.get('/', (request, response) => {
    response.send('<h1>Hello Exercise 3.13-14!</h1>')
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
/*
  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(per => per.id !== id)
  
    response.status(204).end()

  })*/

  const generateId = () => {
    const Id = Math.floor(Math.random() * 10000000);
    return Id
  }

  app.post('/api/persons', (request, response,next) => {
    const body = request.body
    const name_exists = persons.filter(per => per.name !== body.name)?false:true;


   if (!body.number) {
      return response.status(400).json({ 
        error: 'number missing' 
      })
    }else if(!body.name){
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }
    else if(name_exists){
      return response.status(400).json({ 
        error: 'name must be unique' 
      })
    }
   
    const new_person = new Person ({
      id_number: generateId(),
      name: body.name,
      number: body.number
    })

    new_person.save().then((savedPerson)=>{
      response.json(savedPerson);
    }).catch((error)=>next(error))
  

  })


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);



  
const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})