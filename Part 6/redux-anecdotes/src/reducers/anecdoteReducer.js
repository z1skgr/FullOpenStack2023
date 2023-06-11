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
    vote(state, action) {
      const votedAnecdote = action.payload
      const { id } = action.payload
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : votedAnecdote
      );
    }
  }
})


export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdotes(newAnecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteService.update(anecdote);
    dispatch(vote(votedAnecdote));
  };
};



export const { vote, setAnecdotes, appendAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer