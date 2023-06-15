import axios from 'axios'
import jwt from 'jwt-decode'
const baseUrl = '/api/blogs'
let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getUserId = () => {
  return token ? jwt(token).id : false
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObj) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObj, config)
  return response.data
}

const update = async (id, newObj) => {
  const request = await axios.put(`${baseUrl}/${id}`, newObj)
  return request.data
}

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  }

  const request = await axios.delete(`${baseUrl}/${id}`, config)
  return request.data
}

export default { getAll, create, update, setToken, remove, getUserId }
