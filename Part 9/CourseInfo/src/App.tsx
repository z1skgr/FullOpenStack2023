import { CourseInfo } from "./types";
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Header = (props:any) => {
  return (
    <div>
      <h1>{props.name}</h1>        
    </div>
  )
}

const Content = ({ parts }: { parts: CourseInfo[] }) => {
  return (
    <div>
      {parts.map(({ name, exerciseCount }) => (
        <p key={name}> {name} {exerciseCount}</p>
      ))}
    </div>
  );
};

const Total = ({parts}: {parts:CourseInfo[]}) => {
  const total = parts.reduce((carry, part) => carry + part.exerciseCount, 0);
    return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 12
    },
    {
      name: "Using props to pass data",
      exerciseCount: 8
    },
    {
      name: "Deeper type usage",
      exerciseCount: 20
    }
  ];

  return (
      <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total parts={courseParts}/>
    </div>
  );
};

export default App;