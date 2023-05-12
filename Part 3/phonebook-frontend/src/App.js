import { useState,useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Filter from './components/Filter'
import personService from "./services/persons"
import Message from "./components/Message";
import "./index.css"

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

      useEffect(() => {
        const timer = setTimeout(() => {
          setMessage(null);
        }, 5000);
        return () => {
          clearTimeout(timer);
        };
      }, [message]);
  

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

      

      

     
      //console.log(findObject)
      personService.update(persons[found].id, findObject ).then((returnedPerson) => {
        const updatedPersons = persons.map((person) =>
        person.id !== returnedPerson.id ? person : returnedPerson);
        console.log(updatedPersons)
        setPersons(updatedPersons);
        setInitial(updatedPersons);
        setMessage(`Updated ${newName}'s number`);}
        ).catch(error=>{
          console.log(error)
              setPersons(persons.filter(person => person.id !== findObject.id))
              setNewName('')
              setNewNumber('')
              setMessage(
                `[ERROR] ${findObject.name} was already deleted from server`
              )
        })
        //console.log(`Updated ${newName}'s number to ${newNumber}`  );
          
      
      }
    }else{

      
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length+1
      }

      
      

      



        personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setInitial(persons.concat(returnedPerson))
          setMessage(`Added ${newName} to phone-book`)
          console.log(`Added ${returnedPerson.name} to phone-book with number ${returnedPerson.number}`)
        }).catch(error => {
          // this is the way to access the error message
          console.log(error.response.data.error)
          setMessage(`[ERROR] ${error.response.data.error}`)
        })
     
      

  
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
        setMessage(`[ERROR] No results..`)
        
      }
    }else{
      setPersons(initial)
      setMessage(null)
    }
    
    
    
  }

  const deletePerson = (id, name) => {
     
    if(window.confirm(
      `Delete ${name}`)){        
        personService.remove(id).then(() => {
        const updatedPersons = persons.filter((person)=> person.id!==id);
        setPersons(updatedPersons);
        setInitial(updatedPersons);
        setMessage(`Deleted ${name} from phone_book`);
        console.log(`Deleted ${name} from phone_book`);
      })
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