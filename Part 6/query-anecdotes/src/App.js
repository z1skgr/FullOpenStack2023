import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

import { useMutation, useQueryClient } from 'react-query'
import { getAnecdotes, updateAnecdote } from './request'
import { useQuery } from 'react-query'

import { useContext } from 'react';
import Context from './context';



const App = () => {

  const [, msgDispatch] = useContext(Context);

  const queryClient = useQueryClient()



  const updateAnecdoteMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    },
  })

  const handleVote = (anecdote) => {
    console.log('vote')
    updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes+1 })
    msgDispatch({type: 'SHOW', payload: `anecdote  ${anecdote.content} voted!`});
          setTimeout(() => {
            msgDispatch({type: 'HIDE'})
        }, 5000);
  }



  const result = useQuery('anecdotes', getAnecdotes , {
    retry: false
    })
  console.log(result)

  const anecdotes = result.data

  if ( result.isError ) {
    return <div> anecdote service not available due to problems in servers...</div>
  }

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }


  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App