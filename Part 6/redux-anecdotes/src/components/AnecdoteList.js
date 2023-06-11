import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import * as _ from "lodash";
import React from 'react'
import { showNotification } from '../reducers/notificationReducer';

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()
  return(
    
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() =>
              {dispatch(voteAnecdote(anecdote))
                dispatch(showNotification(`You voted for ${anecdote.content}`,5))   
            }}>vote</button>
          </div>
        </div>
      
  )
}

const AnecdoteList = () => {
 
  const anecdotes = useSelector(({filter, anecdotes}) => {
    if ( filter=== null ) {
      return anecdotes
    }
    return anecdotes.filter((anecdote)=>{
    return anecdote.content.toString().toLowerCase().indexOf(filter.toString().toLowerCase()) >=0;
    })
  })

  const orderedAnecdotes = _.sortBy(anecdotes, ["votes","content"])

  return(
    <ul>
      {
     
     orderedAnecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          
        />
      )}
    </ul>
  )
}
export default AnecdoteList