import React from 'react'
import Blog from './Blog'


const blogForm = (addBlog,blogs,author,handleAuthor, title, handleTitle,url,handleUrl) => {    
    return (<>  
    <form onSubmit={addBlog}>
          
          <h2>create new</h2>
          <div>
    Author
    <input
      type="author"
      value={author}
      name="author"
      onChange={handleAuthor} />
  </div>
  <div>
    Title
    <input
      type="title"
      value={title}
      name="title"
      onChange={handleTitle} />
  </div>
  <div>
    Url
    <input
      type="url"
      value={url}
      name="url"
      onChange={ handleUrl } />
  </div>
  <button type="create">create</button>
          
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
            )}
  </form>
  
  </>  )
}


export default blogForm