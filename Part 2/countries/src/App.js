import { useState, useEffect } from 'react'
import axios from 'axios'
import { FilterDisplay } from './Components/Filter'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Data for countries</h1>
      <div>
        Find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      <FilterDisplay countries={countries} filter={filter} />
    </div>
  )
}

export default App
