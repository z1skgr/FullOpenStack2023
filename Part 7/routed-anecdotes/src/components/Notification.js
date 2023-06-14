const Notification = ({ notification }) => {
    const style = {
      padding: 2,
    }
  
    return (
      <div style={notification !== null ? style : { display: 'none' }}>
        {notification}
      </div>
    )
  }

  export default Notification
  