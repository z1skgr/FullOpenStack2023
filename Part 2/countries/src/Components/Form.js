const Input = (props) => {  
    return (  
    <p>
        {props.text}
        <input value={props.value} onChange={props.onChange} />
    </p>)
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

export {Title, Label, Input}