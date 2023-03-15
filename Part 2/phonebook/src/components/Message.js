
const Message = ({ message }) =>{

    if(message === null) return null;

     if (message.includes('ERROR')){
      return (
        <div  className="error-message">
          {message}
        </div>
      )
    } else {
      return (
        <div  className="success-message">
          {message}
        </div>
      )
    }
    
}
    
export default Message