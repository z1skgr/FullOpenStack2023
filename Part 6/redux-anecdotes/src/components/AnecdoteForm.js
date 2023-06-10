import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, hideNotification } from '../reducers/notificationReducer'

import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) =>{
   const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    const content = event.target.anecdote.value
    event.preventDefault()
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))
    
    dispatch(setNotification(`Successfully added ${content}`)) 
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
    
    
    
  }
    return(
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
        </form>
    )

    
}



export default AnecdoteForm