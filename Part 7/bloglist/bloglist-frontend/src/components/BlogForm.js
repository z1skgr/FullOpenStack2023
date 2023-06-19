import React from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const BlogForm = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    author: '',
    title: '',
    url: '',
    likes: 0
  })

  const createNew = async (event) => {
    event.preventDefault()

    setForm({
      author: event.target. author.value,
      title : event.target.title.value,
      url : event.target.url.value
    })

    const blogCreate = {
      author: event.target. author.value,
      title : event.target.title.value,
      url : event.target.url.value
    }

    event.target.title.value = ''
    event.target.author.value = ''
    event.target.url.value = ''

    dispatch(createBlog(blogCreate))
    dispatch(
      setNotification(`Blog ${form.title} successfully created`, 'success', 5)
    )
  }

  return (
    <Form onSubmit={createNew}>
      <Form.Group>
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          id="title"
        />
        <Form.Label>Author:</Form.Label>
        <Form.Control
          type="text"
          name="author"
          id="author"
        />
        <Form.Label>Url:</Form.Label>
        <Form.Control
          type="text"
          name="url"
          id="url"
        />
        <div>
          <Button variant="primary" type="submit">
          add
          </Button>
        </div>
      </Form.Group>
    </Form>
  )
}

export default BlogForm