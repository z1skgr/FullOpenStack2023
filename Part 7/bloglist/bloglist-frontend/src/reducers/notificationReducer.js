import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: [],
  reducers: {
    setNotification(state,action){
      state=action.payload
      return state
    },
    hideNotification(state){
      state=null
      return state
    }

  }
})

export const showNotification = (message, timer) => {
  return async (dispatch) => {
    dispatch(setNotification(message))
    setTimeout(() => dispatch(hideNotification()), timer * 1000)
  }
}


export const { setNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer