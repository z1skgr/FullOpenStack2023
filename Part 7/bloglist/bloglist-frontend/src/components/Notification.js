import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  return <span className="message">{notification}</span>
}

export default Notification
