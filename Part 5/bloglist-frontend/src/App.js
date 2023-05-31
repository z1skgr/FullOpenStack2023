import { useState, useEffect, useRef   } from 'react'
import React from 'react'

import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'


import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'

import './index.css'
import Message from './components/Message'
import Togglable from './components/Togglable'

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
    likes: 0
  })
  const blogFormRef = useRef()


  const handleAuthor = (event) => {
    setForm({
      ...form,
      author: event.target.value
    })

  }

  const handleTitle = (event) => {
    setForm({
      ...form,
      title: event.target.value
    })

  }

  const handleUrl = (event) => {
    setForm({
      ...form,
      url: event.target.value
    })

  }

  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.clear()
    setUser(null)
    setMessage(null)
    setForm('')
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
      setMessage('ERROR, Wrong username or password')
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

  useEffect(() => {
    blogService.getAll().then(blogs => {
      setBlogs( blogs ) }
    )
  }, [])



  const addBlog = async (event) => {
    event.preventDefault()
    const newBlog = {
      title: form.title,
      author: form.author,
      url: form.url,
      likes: 0

    }

    try {
      const postOne = await blogService.create(newBlog)

      blogFormRef.current.toggleVisibility()
      setBlogs(blogs.concat(postOne))

      //console.log(user)
      setForm({ author:'',title:'',url:'' })
      setMessage(`A new Blog ${newBlog.title} by ${newBlog.author}`)
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

  const updateBlog = async (id, updBlog) => {
    try {
      const response = await blogService.update(id, updBlog)
      setMessage(`Update likes on blog ${updBlog.title}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      setBlogs(
        blogs.map((blog) => (blog.id === response.id ? response : blog))
      )
    } catch (exception) {
      setMessage('ERROR' + exception.response.data.error)
    }
  }

  const deleteBlog = async (blog) => {
    try{
      if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {

        await blogService.remove(blog.id)
        setMessage(`${blog.title} Blog deleted`)
        setBlogs(blogs.filter(b => b.id !== blog.id))
        setTimeout(() => {
          setMessage(null)
        }, 5000)

      }

    }catch(exception){
      setMessage('ERROR' + exception.response.data.error)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }

  }

  return (
    <div>
      <h2>log in to application</h2>

      <Message message={message} />
      {user === null ? null :<p>
        <span className="active-user">{user.name}</span> logged in

        <button onClick={handleLogout} type="submit">logout</button>
      </p>}

      {user === null ?

        <LoginForm handleLogin={handleLogin} username={username} password={password}
          setUsername = {
            e => setUsername(e.target.value)}
          setPassword = {
            e => setPassword(e.target.value)}
        />
        :

        <div> <Togglable buttonLabel="new blog" blogs={blogs} ref={blogFormRef}>
          <BlogForm addBlog={addBlog} author={form.author} handleAuthor={handleAuthor}
            title={form.title} handleTitle={handleTitle} url={form.url} handleUrl={handleUrl} />

        </Togglable>


        {
          <div>
            <table border="5">
              <thead>
                <tr><th>Title / Author</th><th>URL</th><th>Likes</th><th>Delete</th>
                </tr>

                {blogs.sort((a,b) => a.likes - b.likes).map((blog) => (
                  <Blog key={blog.id} blog={blog} updatedBlog={updateBlog} deleteBlog={deleteBlog} />
                ))}


              </thead>


            </table>
          </div>
        }
        </div>


      }





    </div>
  )
}

export default App