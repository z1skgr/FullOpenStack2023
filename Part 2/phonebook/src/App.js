import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },

  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const found = persons.findIndex((element) => element.name === newName)
    //console.log(`${found} index`)
    
    if(found>-1){
      alert(`${newName} is already to phonebook`)
    }else{
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length+1
      }
    
      setPersons(persons.concat(nameObject))

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




    
    
  
  //debugger
  return (
    <div>
      <h2>Phonebook</h2>
      
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