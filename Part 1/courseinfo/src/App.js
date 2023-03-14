import React from "react"


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>        
    </div>
  )
}

const Content = ({part}) => {
  return (
    <div>
      <Part name={part[0].name} number={part[0].exercises}/>
      <Part name={part[1].name} number={part[1].exercises}/>
      <Part name={part[2].name} number={part[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.number}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}





const App = () => {
  const course = 'Half Stack application development'
  const part = [{name: 'Fundamentals of React',
  exercises: 10},
    {name:'Using props to pass data',
  exercises: 7},
   {name :'State of component',
   exercises : 14}]

  const sum_exercises = part[0].exercises+part[1].exercises+part[2].exercises
  
  return (
    <div>

        
        <div>
          <Header course={course} />
          <Content part={part}  />
          <Total total={sum_exercises} />
        </div>


              
        

        
    </div>
  )
}


export default App;
