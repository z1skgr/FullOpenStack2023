const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }

]
 
  app.get('/', (request, response) => {
    response.send('<h1>Hello Exercise 3.4!</h1>')
  })
  

  
  app.get('/api/persons', (request, response) => {
    
    response.json(persons)
  })

  app.get('/api/info', (request, response) => {
    const date_time = new Date().toString(); 
    response.send(`<p>Phonebook has info for ${persons.length} people.</p><p>${date_time}</p>`);
  })

  
  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const per = persons.find(person => {
     // console.log(person.id, typeof person.id, id, typeof id, person.id === id)
      return person.id === id
    })
    if (per) {
      response.json(per)
    } else {
      response.status(400).send( 
        `error: content missing` 
      )
    }
    //console.log(per)

  })


  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(per => per.id !== id)
  
    response.status(204).end()

  })


  
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)