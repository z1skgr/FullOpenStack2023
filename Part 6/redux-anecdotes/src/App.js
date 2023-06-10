import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import VisibilityFilter from './components/VisibilityFilter'
import Notification from './components/Notification'

import { useEffect } from 'react'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => 
        
        {
          dispatch(setAnecdotes(anecdotes))})

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
