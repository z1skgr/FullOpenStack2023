import { CoursePart } from "./types";
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Header = (props:any) => {
  return (
    <div>
      <h1>{props.name}</h1>        
    </div>
  )
}

const Content = ({ parts }: { parts: CoursePart[] }) => {
  return (
    <div>
      {parts.map((part, idx) => (
        <div key={idx} style={{ marginTop: 10 }}>
          <div>
            <strong>
              {part.name} {part.exerciseCount}
            </strong>
          </div>
          <Part part={part} />
        </div>
      ))}
    </div>
  );
};

const Total = ({parts}: {parts:CoursePart[]}) => {
  const total = parts.reduce((carry, part) => carry + part.exerciseCount, 0);
    return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ part }: { part: CoursePart }): JSX.Element => {
  switch (part.kind) {
    case "basic":
      return <div> {part.description} </div>;
    case "group":
      return <div>Project exercises {part.groupProjectCount}</div>;
    case "background":
      return (
        <div>
          <div>{part.description}</div>
          <div>{part.backgroundMaterial}</div>
        </div>
      );
    case "special":
      return (
        <div> 
         <div>{part.description}</div>
         <div> Required skills:{" "} {part.requirements.map((skill) => skill).join(", ")} </div>
        </div>
      );
    default:
      return assertNever(part);
  }
};

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group",

    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic",

    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background",

    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",

    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special"
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