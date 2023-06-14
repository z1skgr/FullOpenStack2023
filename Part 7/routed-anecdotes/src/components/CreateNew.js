import {  useNavigate } from "react-router-dom"

import { useField } from "../hooks"

const CreateNew = (props) => {
    const content = useField('content')
    const author = useField('author')
    const info = useField('info')
  
    const navigate = useNavigate('/')
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: Math.floor(Math.random()*100)
      })
      navigate('/')
    }

    const handleReset = () => {
      content.reset()
      author.reset()
      info.reset()      
    }

    
  
    
  
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
        content: 
        <input  type={content.type}
            name="content"
            value={content.value}
            onChange={content.onChange} /> 
        <br/> 
        author:
        <input type={author.type}
            name="author"
            value={author.value}
            onChange={author.onChange} />
        <br /> 
        info:
        <input type={info.type}
            name="info"
            value={info.value}
            onChange={info.onChange} />
        <div>
        <button type="submit">create</button>
        <button type="reset" onClick={handleReset}>reset</button>
        </div>
        </form>
        
      </div>
    )
  
  }

  export default CreateNew