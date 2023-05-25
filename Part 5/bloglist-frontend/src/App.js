import { useState, useEffect } from 'react'


import blogService from './services/blogs'
import loginService from './services/login'
import loginForm from "./components/LoginForm";
import blogForm from "./components/BlogForm";
import "./index.css"

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.clear()
    setUser(null)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      ) 
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
      : blogForm(handleLogout,user,blogs)
    }      
    </div>
  )
}

export default App