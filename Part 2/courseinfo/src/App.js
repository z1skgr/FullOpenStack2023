import React from "react"


const Header = (props) => {
  console.log(props)
  return <h1>{props.text}</h1>        
}

const Label = (props) => {
  console.log(props)
  return (
    <div>
     <p> {props.text} {props.value}</p>
    </div>
  )

}

const Course = ({ course }) => { 
  console.log(course)

  return (
    <div>
      <Header text={course.name}/>
      <Label text={course.parts[0].name} value={course.parts[0].exercises}/>
      <Label text={course.parts[1].name} value={course.parts[1].exercises}/>
      <Label text={course.parts[2].name} value={course.parts[2].exercises}/>

    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
