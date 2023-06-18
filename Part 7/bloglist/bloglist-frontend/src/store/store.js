import { createStore, combineReducers, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import authReducer from '../reducers/authReducer'
import blogReducer from '../reducers/blogReducer'
import notificationReducer from '../reducers/notificationReducer'
import userReducer from '../reducers/userReducer'



const reducer = combineReducers({
  user: authReducer,
  users: userReducer,
  blog: blogReducer,
  notification: notificationReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default store