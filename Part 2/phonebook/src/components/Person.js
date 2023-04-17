const Person= ({ person }) =>{
    return(
        <div>
            
            {person.map(per => <li key={per.id}>{per.name} {per.number}</li>)}
        </div>
        
        

    )
}

export default Person