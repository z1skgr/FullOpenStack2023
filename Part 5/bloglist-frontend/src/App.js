import { useState, useEffect } from 'react'

import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import loginForm from "./components/LoginForm";
import "./index.css"

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password,
      })
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMessage('ERROR, Wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }


  
  const blogForm = () => (
    <form onSubmit={null}>
          <p>
            <span className="active-user">{user.name}</span> logged in
          </p>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </form>  
  )


  useEffect(() => {
    blogService.getAll().then(blogs => {
      setBlogs( blogs ) }
    )  
  }, [])
  
  return (
    <div>
      <h2>log in to application</h2>

      {user === null ?
      
        loginForm(handleLogin, username, password, setUsername, setPassword, message)
      : blogForm()
    }      
    </div>
  )
}

export default App