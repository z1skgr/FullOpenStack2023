const Button = (props) => {
    return(
    <button onClick={props.handleClick}>
        {props.text}
    </button>)
}

const Label = (props) => {
    return (
      <div>
        <p> <b> {props.text}: </b> {props.value} </p>
      </div>


    )
}

const Title = (props) => {
    return (
      <div>
        <h2> {props.title} </h2>
      </div>
    )
}

export {Title, Label, Button}