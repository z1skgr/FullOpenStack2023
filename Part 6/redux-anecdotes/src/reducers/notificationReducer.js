import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: [],
    reducers: {
        setNotification(state,action){
            state=action.payload
            return state
        },
        hideNotification(state,action){
            state=null
            return state
        }
        
    }
  })
  





  export const { setNotification, hideNotification } = notificationSlice.actions
  export default notificationSlice.reducer
