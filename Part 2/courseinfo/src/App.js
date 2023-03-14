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

  const total = course.parts.reduce((prev, current) => {
    return prev + current.exercises;
  }, 0);
    return (
      <div><Header text={course.name} />
      {course.parts.map(cc => 
        <Label text={cc.name} value={cc.exercises}/>
                     
      )}<p> <b>Total of {total}  exercises</b></p>
        
      

      </div>
    )

    
  }




  
  


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
    {courses.map(course => 
          <Course key={course.id} course={course} />
        )
    }
    </div>
        

  )
}

export default App