import React from "react"

import {useState} from 'react'


const Header = props => <h1>{props.name}</h1>



const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)



const Statistics = ({stats}) => {
  const total = stats.good + stats.neutral + stats.bad

  let average = (stats.good * 1 + stats.bad * -1) / total
  let positive = stats.good * (100/total)

  if(total===0){
    average=0
    positive=0
  }


  return ( 
  <div> 
    <div>good {stats.good}</div> 
    <div>neutral {stats.neutral}</div> 
    <div>bad {stats.bad}</div> 
    <div>all {total}</div> 
    <div>average {average}</div>           
    <div>positive {positive} %</div>
  </div>
    
    
  )

}

const App = () =>{
  const [stats, setStats] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGood = () =>
    setStats({...stats, good: stats.good + 1})

  const handleNeutral = () =>
    setStats({...stats, neutral: stats.neutral + 1})

  const handleBad = () =>
    setStats({...stats, bad: stats.bad + 1}) 

  return (
    <div>
      <Header name="Give feedback" />
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Header name="Statistics" />

      <Statistics stats={stats} />
    </div>
    
    
  )
    
}



export default App

