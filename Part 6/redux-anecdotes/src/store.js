//import { createStore, combineReducers } from 'redux'
import {reducer} from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
      anecdotes: reducer,
    filter: filterReducer
    }
  })
  console.log(store.getState())

export default store