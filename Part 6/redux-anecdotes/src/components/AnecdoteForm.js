import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, hideNotification } from '../reducers/notificationReducer'



const AnecdoteForm = (props) =>{
   const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    const content = event.target.anecdote.value
    event.preventDefault()
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    
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