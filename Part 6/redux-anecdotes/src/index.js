import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import {reducer} from './reducers/anecdoteReducer'

import filterReducer from './reducers/filterReducer'

const reduce = combineReducers({
  anecdotes: reducer,
  filter: filterReducer
})


const store = createStore(reduce)
console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />  
    </Provider>
)
