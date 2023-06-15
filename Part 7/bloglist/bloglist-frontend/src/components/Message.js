const Message = ({ message }) => {
  if (message === null) return null

  if (message.includes('ERROR')) {
    return <span className="error-message">{message}</span>
  } else {
    return <span className="success-message">{message}</span>
  }
}

export default Message
