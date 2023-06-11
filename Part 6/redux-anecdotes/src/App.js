import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import VisibilityFilter from './components/VisibilityFilter'
import Notification from './components/Notification'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes()) 

  }, [dispatch])

    return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <VisibilityFilter />
     <AnecdoteList/>
      <h2>create new</h2>
        <AnecdoteForm />
       
    </div>
  )
}

export default App