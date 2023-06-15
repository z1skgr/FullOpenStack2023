import React from 'react'
import { useState } from 'react'

const ΒlogForm = ({ createBlog }) => {
  const [form, setForm] = useState({
    author: '',
    title: '',
    url: '',
    likes: 0,
  })

  const handleAuthor = (event) => {
    setForm({
      ...form,
      author: event.target.value,
    })
  }

  const handleTitle = (event) => {
    setForm({
      ...form,
      title: event.target.value,
    })
  }

  const handleUrl = (event) => {
    setForm({
      ...form,
      url: event.target.value,
    })
  }

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: form.title,
      author: form.author,
      url: form.url,
    })
    setForm({
      title: '',
      author: '',
      url: '',
    })
  }

  return (
    <>
      <form onSubmit={addBlog}>
        <h2>create new</h2>
        <div>
          Author
          <input
            id="author"
            type="author"
            value={form.author}
            name="author"
            onChange={handleAuthor}
          />
        </div>
        <div>
          Title
          <input
            id="title"
            type="title"
            value={form.title}
            name="title"
            onChange={handleTitle}
          />
        </div>
        <div>
          Url
          <input
            id="url"
            type="url"
            value={form.url}
            name="url"
            onChange={handleUrl}
          />
        </div>
        <button id="create-button" type="create">
          create
        </button>
      </form>
    </>
  )
}

export default ΒlogForm
