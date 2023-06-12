import { useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../request'

import { useContext } from 'react';
import Context from '../context';

const AnecdoteForm = () => {
  const [, msgDispatch] = useContext(Context);
  const queryClient = useQueryClient()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes:0, id:getId() })
    console.log('new anecdote')
}

const newAnecdoteMutation = useMutation(createAnecdote, {
  onSuccess: (newAnecdote) => {
    const anecdotes = queryClient.getQueryData('anecdotes')
    queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
    msgDispatch({type: 'SHOW', payload: `${newAnecdote.content} added!`});
          setTimeout(() => {
            msgDispatch({type: 'HIDE'})
          }, 5000);
  },
  onError: () => {
    msgDispatch({type: 'SHOW', payload: `too short anecdote, must have length 5 or more`});
    setTimeout(() => {
      msgDispatch({type: 'HIDE'})
    }, 5000);
  }
  
})
  const getId = () => (100000 * Math.random()).toFixed(0)


  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
