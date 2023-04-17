import { useState,useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [initial, setInitial] = useState(persons)

    // Fetch person data from json-server
    useEffect(() => {
      console.log('effect')
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
          setInitial(response.data)
        })
    }, [])
  

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
    console.log('Filter'+newFilter)
    if(search.length>0){
      
       personstoshow = initial.filter((contact)=>{
        console.log(contact.name, contact.name.toLowerCase().indexOf(search.toLowerCase()))
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

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      
      <h2>Numbers</h2>

      <Person person={persons} />
      </div>
    
     
    
  )
}

export default App