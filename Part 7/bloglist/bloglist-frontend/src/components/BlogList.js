import React from 'react'
import Blog from './Blog'
import { useSelector } from 'react-redux'

const BlogList = () => {
  const blogs = useSelector((state) => state.blog)
  return blogs.sort((a,b) => a.likes - b.likes).map((blog) => <Blog key={blog.id} blog={blog} />)
}

export default BlogList