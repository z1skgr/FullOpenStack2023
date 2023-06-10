import { createSlice } from '@reduxjs/toolkit'

export const getId = () => (100000 * Math.random()).toFixed(0)

/*
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}*/


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
    createAnecdote(state, action){
      const newAnecdote = action.payload
      state.push(newAnecdote)

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





export const { createAnecdote, vote, setAnecdotes, appendAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer