import axios from 'axios'
import { getId } from '../reducers/anecdoteReducer'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes:0, id:getId()}
  const response = await axios.post(baseUrl, object)
  return response.data
}


const update = async (anecdote) => {
  const { id } = anecdote;
  const newAnecdote = {...anecdote, votes: anecdote.votes+1}

  
  const response = await axios.put(`${baseUrl}/${id}`, newAnecdote);
  return response.data;
};




// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, update }