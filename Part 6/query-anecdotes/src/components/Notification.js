import { useContext } from 'react';
import Context from '../context';

const Notification = () => {
  const [msg, ] = useContext(Context);
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (msg === null) return null
  else return (
    <div style={style}>
      {msg}
    </div>
  )
}

export default Notification