import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

export const getId = () => (100000 * Math.random()).toFixed(0)

/*
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}*/

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
   
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdotes(state,action){
        state.push(action.payload)
    },
    vote(state,action){
      const id = action.payload
      const findAnecdote = state.find(anecdote => anecdote.id === id)
      const updatedAnecdote = {
        ...findAnecdote,
        votes: findAnecdote.votes + 1
      }

      return state.map(anecdote => anecdote.id !== id ? anecdote : updatedAnecdote)    
    }
  }
})


export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdotes(newAnecdote))
  }
}



export const { vote, setAnecdotes, appendAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer