import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [initial, setInitial] = useState(persons)

  const addPerson = (event) => {
    event.preventDefault()
    const found = persons.findIndex((element) => element.name === newName)
    //console.log(`${found} index`)
    
    if(found>-1){
      alert(newName + ' is already to phonebook')
    }else{
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length+1
      }
    
      setPersons(persons.concat(nameObject))
      setInitial(persons.concat(nameObject))
    }
    setNewName('')
    setNewNumber('')
    
  }


  const handleNameChange = (e) => {
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (ev) => {
    console.log(ev.target.value)
    ev.preventDefault()

    


    const search = ev.target.value;

    console.log('Search'+ search)
    let personstoshow;
    setNewFilter(search);
    if(search){
      
       personstoshow = persons.filter((contact)=>{
        return contact.name.toLowerCase().indexOf(search.toLowerCase()) >=0;
      })

      setPersons(personstoshow)
    }else{
      setPersons(initial)
    }
    
    
    
  }
  //debugger
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with: <input value={newFilter} onChange={handleFilterChange} />
        </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
        {persons.map(per => <li key={per.id}>{per.name} {per.number}</li>)}
        <div> 
        </div>
     
    </div>
  )
}

export default App