import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Expression = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0) 
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0)) 
  const [winner, setWinner] = useState(0)
  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  };
   
  
  const NewAnecdote = () => {
    setSelected([Math.floor(Math.random() * (anecdotes.length))])
  }




  const NewVote = () => {

    const vv=[...voted]
    vv[selected]+=1
    setVoted(vv)  
    
    const mm=vv.indexOf(Math.max.apply(Math, vv))
    setWinner(mm)
  }

  const reset = () => {
    setWinner(0)
    toggleButton()
    setVoted(Array(anecdotes.length).fill(0)) 
    setSelected(0)
  }






  if(showButton) {
    return (
      <div>
        {showButton && <button onClick={toggleButton}>Generate Anecdote</button>}
      </div>
    )
  }

  return (
    <div>
      <Expression text={anecdotes[selected]} votes={voted[selected]}  />
      <div>
      <Button onClick={NewVote} text='Vote' />
        <Button onClick={NewAnecdote} text='Next anecdote' />
      </div>
      <div>
      <Expression text={anecdotes[winner]} votes={voted[winner]}  />
      </div>
      <div>
      {!showButton && <Button onClick={reset} text="Back"/>}
      </div>

      
      
      
    </div>
  )


}

export default App