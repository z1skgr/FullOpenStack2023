
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
  
  
export default Course
  