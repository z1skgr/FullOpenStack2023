const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case 'SHOW':
    return action.data
  case 'HIDE':
    return action.data
  default:
    return state
  }
}

export const setNotification = (
  notification,
  notificationType,
  displayTime
) => {
  return async (dispatch) => {
    dispatch({
      type: 'SHOW',
      data: {
        message: notification,
        type: notificationType
      }
    })

    setTimeout(() => {
      dispatch({
        type: 'HIDE',
        data: null
      })
    }, displayTime * 1000)
  }
}

export default notificationReducer