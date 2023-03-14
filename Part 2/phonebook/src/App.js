import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1
   }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const found = persons.findIndex((element) => element.name === newName)
    //console.log(`${found} index`)
    
    if(found>-1){
      alert(`${newName} is already in phonebook`)
      alert(newName + ' is already added to phonebook')
    }else{
      const nameObject = {
        name: newName,
        id: persons.length+1
      }
    
      setPersons(persons.concat(nameObject))
    }
    setNewName('')
    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  //debugger
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
        {persons.map(per => <li key={per.id}>{per.name}</li>)}
    </div>
  )
}

export default App