import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../reducers/authReducer'
import { initBlogs } from '../reducers/blogReducer'
import { Form, Button } from 'react-bootstrap'

const LoginForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    event.target.username.value = ''
    event.target.password.value = ''
    dispatch(login(username, password))
    dispatch(initBlogs())
    history.push('/blogs')
  }

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group>
        <div>
          <Form.Label>username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div>
          <Form.Label>password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div>
          <Button variant="primary" type="submit">
            login
          </Button>
        </div>

      </Form.Group>
    </Form>
  )
}

export default LoginForm