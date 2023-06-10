import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  const handleFilter = (event) => {
    dispatch(filterChange(event.target.value))
}
const style = {
  marginBottom: 10
}

  return (
    <div style={style}>filter <input name="filterAnecdote" onChange={handleFilter} /></div>
  )
}

export default VisibilityFilter
