import { useState,useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Filter from './components/Filter'
import personService from "./services/persons"
import Message from "./components/Message";

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [initial, setInitial] = useState(persons)
  const [message, setMessage] = useState(null)

    // Fetch person data from json-server
    useEffect(() => {
      console.log('effect')
      personService.getAll().then((initialPersons) => {
          setPersons(initialPersons);
          setInitial(initialPersons);
          console.log(initialPersons);
          (initialPersons.length) ? setMessage(`Database imported`) : setMessage(`Database empty`)
        });

      }, [])
  

  const addPerson = (event) => {
    event.preventDefault()
    const found = persons.findIndex((element) => element.name === newName)
    //console.log(`${found} index`)

    if(found>-1){
      if (
        window.confirm(
          `${newName} is in phone-book, do you want to replace it?`
        )
      ){
      const findObject = {
        ...persons[found],
        number: newNumber
      }

      var edit_number = newNumber.replace(/-/g, '');
      console.log(edit_number)

      const dd = !isNaN(+edit_number)
      console.log(dd);

      

      if(dd && edit_number.length===10){
      //console.log(findObject)
      personService.update(persons[found].id, findObject ).then((returnedPerson) => {
        const updatedPersons = persons.map((person) =>
        person.id !== returnedPerson.id ? person : returnedPerson);
        console.log(updatedPersons)
        setPersons(updatedPersons);
        setInitial(updatedPersons);
        setMessage(`Updated ${newName}'s number`);}
        ).catch((error) => setMessage(error.response.data.error));
        //console.log(`Updated ${newName}'s number to ${newNumber}`  );
          
      }else{
        setMessage(`Invalid number`);
      }
      }
    }else{

      
      const nameObject = {
        name: newName,
        number: newNumber,
        id: Math.floor(Math.random() * 1001)+ 1000
      }

      
      
      var str = newNumber
      var new_str = str.replace(/-/g, '');
      console.log(new_str)
      const dd = !isNaN(+new_str)
      console.log(dd);
      

      if(dd && new_str.length===10){

        personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setInitial(persons.concat(returnedPerson))
          setMessage(`Added ${newName} to phone-book`)
          console.log(`Added ${returnedPerson.name} to phone-book with number ${returnedPerson.number}`)
        }).catch((error)=>setMessage(error.response.data.error))
      }
      else{
        setMessage(`Invalid  number`);
      }
      

  
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
    let persons_to_show;
    setNewFilter(search);
    console.log('Filter'+newFilter)
    if(search.length>0){
      
       persons_to_show = initial.filter((contact)=>{
        console.log(contact.name, contact.name.toLowerCase().indexOf(search.toLowerCase()))
        return contact.name.toLowerCase().indexOf(search.toLowerCase()) >=0;
      })

      setPersons(persons_to_show)
      
      if(persons_to_show.length>0){
        setMessage(`Filtering...`)
      }else{
        setMessage(`No results..`)
      }
    }else{
      setPersons(initial)
      setMessage(``)
    }
    
    
    
  }

  const deletePerson = (id, name) => {
     
    if(window.confirm(
      `Delete ${name}`)){        
        personService.remove(id).then(() => {
        const updatedPersons = persons.filter((person)=> person.id!==id);
        setPersons(updatedPersons);
        setInitial(updatedPersons);
        setMessage(`Deleted ${name} from phone book`);
        console.log(`Deleted ${name} from phone book`);
      }).catch((error)=>setMessage(error.response.data.error))
        console.log('delete')
    }

    

  }

  //debugger
  return (
    
      <div>
      <h2>Phone Book</h2>
      
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      
      <h2>Numbers</h2>

      <Person person={persons} deletePerson={deletePerson} />

      <Message message={message} />
      </div>
    
     
    
  )
}

export default App