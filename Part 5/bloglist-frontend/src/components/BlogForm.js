import React from 'react'
import Blog from './Blog'

const blogForm = (handleLogout,user,blogs) => (
    <form onSubmit={handleLogout}>
          <p>
            <span className="active-user">{user.name}</span> logged in
            
            <button type="submit">logout</button>
          </p>
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
            )}
    
    </form>  
  )



export default blogForm