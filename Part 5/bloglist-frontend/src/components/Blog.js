import { useState } from 'react'
import React from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, updatedBlog, deleteBlog }) => {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const userId = blogService.getUserId()

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const upLikes = () => {
    //console.log('Add a like')
    const upBlog = {
      ...blog,
      likes:blog.likes+1
    }
    updatedBlog(blog.id,upBlog)
  }

  const removeBlog = () => {
    deleteBlog(blog)
  }


  return(

    <tr key={blog.id} style={blogStyle}>
      <th>{blog.title} / {blog.author} <button id={'show_button'} onClick={toggleVisibility}>Show</button></th>
      {visible ? (

        <>
          <th>{blog.url}</th>
          <th>{blog.likes}<button id={'like_button'} onClick={upLikes}>like</button></th>
          <th>
            {(blog.user === userId) &&(<button id={'delete_button'} onClick={removeBlog}>delete</button>)}
          </th>
        </>
      ):null}



    </tr>


  )
}







export default Blog