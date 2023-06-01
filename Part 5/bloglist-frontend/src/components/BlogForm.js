import React from 'react'

const ΒlogForm = (props) => {
  return (<>
    <form onSubmit={props.addBlog}>
      <h2>create new</h2>
      <div>
    Author
        <input
          type="author"
          value={props.author}
          name="author"
          onChange={props.handleAuthor} />
      </div>
      <div>
    Title
        <input
          id='title'
          type="title"
          value={props.title}
          name="title"
          onChange={props.handleTitle} />
      </div>
      <div>
    Url
        <input
          id='id'
          type="url"
          value={props.url}
          name="url"
          onChange={ props.handleUrl } />
      </div>
      <button id='create-button' type="create">create</button>
    </form>
  </>  )
}

export default ΒlogForm