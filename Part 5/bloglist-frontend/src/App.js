import { useState, useEffect } from 'react'
import React from 'react'

import blogService from './services/blogs'
import loginService from './services/login'
import loginForm from "./components/LoginForm";
import blogForm from "./components/BlogForm";
import "./index.css"
import Message from "./components/Message";

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({
    author: '',
    title: '',
    url: '',
  });

  
  const handleAuthor = (event) =>{
    setForm({
      ...form,
      author: event.target.value
    });

  }

  const handleTitle = (event) =>{
    setForm({
      ...form,
      title: event.target.value
    });

  }
  
  const handleUrl = (event) =>{
    setForm({
      ...form,
      url: event.target.value
    });

  }


  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.clear()
    setUser(null)
    setMessage(null)
    setForm({author:'',title:'',url:''})
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
      setMessage('Login approved')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } catch (exception) {
      setMessage('ERROR, Wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }



  useEffect(() => {
    blogService.getAll().then(blogs  => {
      setBlogs( blogs ) }
    )  
  }, [])


  const addBlog = async (event) => {
    event.preventDefault()
    const newBlog = {
      title: form.title,
      author: form.author,
      url: form.url
    }
    console.log(newBlog)


    try {
      await blogService.create(newBlog);
      setBlogs(blogs.concat(newBlog));
      
      setForm({author:'',title:'',url:''})
      setMessage(`Blog ${newBlog.title} was successfully added`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } catch(exception) {
      setMessage(
        `ERROR, Cannot add blog ${newBlog.title}`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }    
  }

  
  return (
    <div>
      <h2>log in to application</h2>
        {user === null ? null :
        <p>
          <span className="active-user">{user.name}</span> logged in
            
            <button onClick={handleLogout} type="submit">logout</button>
        </p>}

      {user === null ?
      
        loginForm(handleLogin, username, password, setUsername, setPassword, message)
      : blogForm(addBlog,blogs,form.author,handleAuthor, form.title, handleTitle,form.url,handleUrl,message)

    }
   <Message message={message} /> 
    </div>
  )
}

export default App