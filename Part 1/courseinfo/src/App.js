import React from "react"


const Header = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>        
    </div>
  )
}

const Content = ({course}) => {
  return (
    <div>
      <Part name={course.parts[0].name} number={course.parts[0].exercises}/>
      <Part name={course.parts[1].name} number={course.parts[1].exercises}/>
      <Part name={course.parts[2].name} number={course.parts[2].exercises}/>
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
  const course = {name:'Half Stack application development',
  parts: [{name: 'Fundamentals of React',
  exercises: 10},
    {name:'Using props to pass data',
  exercises: 7},
   {name :'State of component',
   exercises : 14}]}

  const sum_exercises = course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises
  
  return (
    <div>

        
        <div>
          <Header course={course} />
          <Content course={course}  />
              <Total total={sum_exercises} />
        </div>


              
        

        
    </div>
  )   
  
}


export default App;
