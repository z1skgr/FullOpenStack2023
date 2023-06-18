import blogService from '../services/blogs'
import loginService from '../services/login'
import { setNotification } from './notificationReducer'

const authReducer = (state = null, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
  case 'INITIALIZE':
    return action.user
  case 'LOGIN':
    return action.user
  case 'LOGOUT':
    return action.user
  default:
    return state
  }
}

export const initializeUser = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    blogService.setToken(user.token)
    return {
      type: 'INITIALIZE',
      user: user
    }
  }

  return {
    type: 'INITIALIZE',
    user: null
  }
}

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login({
        username,
        password
      })

      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      blogService.setToken(user.token)
      dispatch({
        type: 'LOGIN',
        user: user
      })
    } catch (exception) {
      dispatch(setNotification('Wrong Credentials','error', 5))
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('loggedBlogAppUser')
    dispatch({
      type: 'LOGOUT',
      user: null
    })
  }
}

export default authReducer