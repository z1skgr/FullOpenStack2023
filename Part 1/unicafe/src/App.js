import React from "react"

import {useState} from 'react'


const Header = props => <h1>{props.name}</h1>



const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => {
  if(text ==="positive"){
    return (
      <tr><td>{text} </td> <td> {value} %</td></tr>
    )
  }

  return (
    <tr><td>{text} </td> <td> {value}</td> </tr>
  )
}

const Statistics = ({stats}) => {
  const total = stats.good + stats.neutral + stats.bad
  const average = (stats.good * 1 + stats.bad * -1) / total
  const positive = stats.good * (100/total)

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
<table>
          <tbody>
            <Statistic text="good" value={stats.good} />
            <Statistic text="neutral" value={stats.neutral} />
            <Statistic text="bad" value={stats.bad} />
            <Statistic text="all" value={total} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />

            </tbody></table>
  
    
    
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

