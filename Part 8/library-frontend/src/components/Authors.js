import { React, useState } from 'react'
import { useQuery, useMutation } from "@apollo/client"
import { ALL_AUTHORS } from "../queries"
import { EDIT_AUTHOR } from '../queries'
import { useEffect } from 'react'

const Authors = ({show, setError}) => {
  const [name, setName] = useState()
  const [born, setBorn] = useState("")

  const result = useQuery(ALL_AUTHORS, {
    onCompleted: data => setName(data.allAuthors[0].name)
  })


  
  const [editAuthor, res] = useMutation(EDIT_AUTHOR, {refetchQueries: [ 
    { query: ALL_AUTHORS }],
    onError: (error) => {
    error.graphQLErrors > 0
      ? setError(error.graphQLErrors[0].message)
      : setError(error.message)
  },
})



  useEffect(() => {
    if (res.data && res.data.editAuthor === null) {
      setError('person not found')
    }
  }, [res.data, setError])

  if (result.loading) {
    return <div>loading...</div>
  }

  
  if (!show) {
    return null
  }

  const authors =  result.data.allAuthors || []

  const handleBirthyear = async (event) => {
    event.preventDefault()

    editAuthor({
      variables: { name, setBornTo: parseInt(born) },
    })

    setName(name)
    setBorn("")
  }





  return (
    <div>
      <h2>authors</h2>
      {console.log(authors)}
      {console.log(result.data.allAuthors[0])}
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Set birthyear</h2>
      <form onSubmit={handleBirthyear}> 
        <div> name <select defaultValue={name} onChange={({ target }) => setName(target.value)}>
            {authors.map((a,index) => (
              <option value={a.name} key={index}>
                {a.name}
              </option>
            ))}
          </select></div> 
        <div> born <input value={born} onChange={({ target }) => setBorn(target.value)}/></div>
        <div><button type="submit">update author</button></div>
      </form>
    </div>
  )
}

export default Authors
