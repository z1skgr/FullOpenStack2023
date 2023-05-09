const express = require('express')
const app = express()


const morgan = require('morgan')
app.use(express.json())

morgan.token("data", (request) => {
  return request.method === "POST" ? JSON.stringify(request.body) : " ";
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

morgan('tiny')



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
    response.send('<h1>Hello Exercise 3.7 & 3.8!</h1>')
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


  const generateId = () => {
    const Id = Math.floor(Math.random() * 10000000);
    return Id
  }

  app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.number || !body.name) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }else if(persons.filter(per => per.name === body.name)){
      return response.status(400).json({ 
        error: 'content already in phonebook' 
      })
    }
   
    const new_person = {
      id: generateId(),
      name: body.name,
      number: body.number
    }
  
    per = persons.concat(new_person)
  
    response.json(per)
  })

  app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
    ].join(' ')
  }))

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

  
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)