const Person= ({ person, deletePerson }) =>{
    return(
        <div>
 
            {person.map(per => <li key={per.id}>{per.name} {per.number} {" "} <button onClick={() => deletePerson(per.id, per.name)}>    
            delete
          </button>
            </li>)}
            
        </div>
        
        

    )
}

export default Person