import { useState, useEffect, useRef } from 'react'
import React from 'react'

import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'

import './index.css'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { showNotification } from './reducers/notificationReducer'

import { useDispatch } from 'react-redux'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch()

  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.clear()

    dispatch(showNotification(`User ${user.username} logged out`,5))
    setUser(null)
  }

  const blogFormRef = useRef()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password,
      })
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      dispatch(showNotification('Login approved', 5))

    } catch (exception) {
      dispatch(showNotification('ERROR, Wrong username or password', 5))
    }
  }

  useEffect(() => {
    blogService.getAll().then((blogs) => {
      setBlogs(blogs)
    })
  }, [])


  const createBlog = async (newBlog) => {
    try {
      const postOne = await blogService.create(newBlog)
      blogFormRef.current.toggleVisibility()
      setBlogs(blogs.concat(postOne))

      dispatch(showNotification(`A new Blog ${newBlog.title} by ${newBlog.author}`, 5))

    } catch (exception) {
      dispatch(showNotification(
        `ERROR, Cannot add blog ${newBlog.title} ${exception.response.data.error}`, 5
      ))
    }
  }

  const updateBlog = async (id, updBlog) => {
    try {
      const response = await blogService.update(id, updBlog)
      dispatch(showNotification(`Update likes on blog ${updBlog.title}`,5))

      setBlogs(blogs.map((blog) => (blog.id === response.id ? response : blog)))
    } catch (exception) {
      dispatch(showNotification('ERROR' + exception.response.data.error))
    }
  }

  const deleteBlog = async (blog) => {
    try {
      if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
        await blogService.remove(blog.id)
        dispatch(showNotification(`${blog.title} Blog deleted`, 5))
        setBlogs(blogs.filter((b) => b.id !== blog.id))
      }
    } catch (exception) {
      dispatch(showNotification('ERROR' + exception.response.data.error, 5))

    }
  }

  return (
    <div>
      <h2>log in to application</h2>

      <Notification />
      {user === null ? null : (
        <p>
          <span className="active-user">{user.name}</span> logged in
          <button onClick={handleLogout} type="submit">
            logout
          </button>
        </p>
      )}

      {user === null ? (
        <LoginForm
          handleLogin={handleLogin}
          username={username}
          password={password}
          setUsername={(e) => setUsername(e.target.value)}
          setPassword={(e) => setPassword(e.target.value)}
        />
      ) : (
        <div>
          {' '}
          <Togglable buttonLabel="new blog" blogs={blogs} ref={blogFormRef}>
            <BlogForm createBlog={createBlog} />
          </Togglable>
          {
            <div>
              <table border="5">
                <thead>
                  <tr>
                    <th>Title / Author</th>
                    <th>URL</th>
                    <th>Likes</th>
                    <th>Delete</th>
                  </tr>

                  {blogs
                    .sort((a, b) => a.likes - b.likes)
                    .map((blog) => (
                      <Blog
                        key={blog.id}
                        blog={blog}
                        updatedBlog={updateBlog}
                        deleteBlog={deleteBlog}
                      />
                    ))}
                </thead>
              </table>
            </div>
          }
        </div>
      )}
    </div>
  )
}

export default App
