import React from "react"

import {useState} from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Label = ({text, value, special}) => {
  return (
    <div>
      {text} {value} {special}
    </div>
  )
}

const Header = (props) => <h1>{props.name}</h1>

    




const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)

  
  const handleGood = () =>{
    setGood(good + 1)
    setTotal(total+1)
    setAvg(((good+1)*1+ (bad*(-1)))/(total+1))
    setPos((good+1)/(total+1)*100)
  }
  const handleNeutral = () =>{
    setNeutral(neutral + 1)
    setTotal(total+1)
    setAvg((good*1+ (bad*(-1)))/(total+1))
    setPos(good/(total+1)*100)
  }
  const handleBad = () =>{
    setBad(bad + 1)
    setTotal(total+1)
    setAvg((good*1+ ((bad+1)*(-1)))/(total+1))
    setPos(good/(total+1)*100)

  }






 


  return (
    <div>

     <Header name="Give feedback" Header/>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>Statistics</h1>
      <div>
        <Label text="good" value={good} special={""}/>
        <Label text="neutral" value={neutral} special={""}/>
        <Label text="bad" value={bad} special={""}/>
        <Label text="all" value={total} special={""} />
        <Label text="average" value={avg} special={""} />
        <Label text="positive" value={pos} special={"%"} />

      </div>
    </div>
  )
}

export default App

