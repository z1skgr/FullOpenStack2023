
const Notify = ({ errorMessage }: { errorMessage: string }) => {
  if ( !errorMessage ) {
    return null
  }
  if(errorMessage.toLowerCase().includes('error')){
    return (
      <div style={{color: 'red'}}>
      {errorMessage}
      </div>
    )
  }
  return (
    <div style={{color: 'green'}}>
    {errorMessage}
    </div>
  )
};
    
export default Notify