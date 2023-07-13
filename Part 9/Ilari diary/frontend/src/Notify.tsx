
const Notify = ({ errorMessage }: { errorMessage: string }) => {
  if ( !errorMessage ) {
    return null
  }
  return (
    <div style={{color: 'green',  height: 20}}>
    {errorMessage}
    </div>
  )
};
    
export default Notify