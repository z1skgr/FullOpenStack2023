import React from 'react'
import ReactDOM from 'react-dom/client'
//import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
//import anecdoteReducer from './reducers/anecdoteReducer'

//import filterReducer from './reducers/filterReducer'
//import { configureStore } from '@reduxjs/toolkit'

/*const reduce = combineReducers({
  anecdotes: reducer,
  filter: filterReducer
})*/
/*
const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer
  }
})*/


//const store = createStore(reduce)
//console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />  
    </Provider>
)
