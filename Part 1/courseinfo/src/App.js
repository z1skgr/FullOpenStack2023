import React from "react"


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>        
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} number={props.part1.exercises}/>
      <Part name={props.part2.name} number={props.part2.exercises}/>
      <Part name={props.part3.name} number={props.part3.exercises}/>
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
  const part1 = {name: 'Fundamentals of React',
  exercises: 10}
  const part2 = {name:'Using props to pass data',
  exercises: 7}
  const part3 ={name :'State of component',
   exercises : 14}

  const sum_exercises = part1.exercises+part2.exercises+part3.exercises
  
  return (
    <div>

        
        <div>
          <Header course={course} />
          <Content part1={part1} part2={part2} part3={part3}  />
          <Total total={sum_exercises} />
        </div>


              
        

        
    </div>
  )
}


export default App;
