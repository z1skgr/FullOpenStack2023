import React from "react"

import {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Label = ({text, value}) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

    




const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const handleGood = () =>{
    setGood(good + 1)
  }
  const handleNeutral = () =>{
    setNeutral(neutral + 1)
  }
  const handleBad = () =>{
    setBad(bad + 1)
  }

 


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>Statistics</h1>
      <div>
        <Label text="good" value={good}/>
        <Label text="neutral" value={neutral}/>
        <Label text="bad" value={bad}/>
      </div>
    </div>
  )
}

export default App

