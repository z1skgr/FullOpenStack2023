import { useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(state => state.notification)
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1,
      margin: '20px 0'
    }
  
    return (
      <div style={notification !== null ? style : { display: 'none' }}>
        {notification}
      </div>
    )
  }
  
  export default Notification