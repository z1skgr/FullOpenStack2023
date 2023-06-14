const Anecdote = ({ anecdote }) => {
    const margin={
      marginBottom: 16
    }
      return (
        <div>
          <h2>{anecdote.content} by {anecdote.author}</h2>
  
          <div style={margin}>has {anecdote.votes} votes</div>
 
          <div style={margin}>For more info see <a href={anecdote.info}>{anecdote.info}</a></div>
        </div>
      )
    }
    
export default Anecdote
