import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import * as _ from "lodash";


const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()
  return(
    
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      
  )
}

const AnecdoteList = () => {
  
  const anecdotes = useSelector(state => state)

  const orderedAnecdotes = _.sortBy(anecdotes, ["votes","content"])

  console.log(orderedAnecdotes)
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