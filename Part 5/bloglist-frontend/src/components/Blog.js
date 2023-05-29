import { useState } from "react";
import blogService from "../services/blogs";

const Blog = ({blog, updatedBlog, deleteBlog}) => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const userId = blogService.getUserId();

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const upLikes = () =>{
    //console.log('Add a like')
    const upBlog = {
      ...blog,
      likes:blog.likes+1
    }
    updatedBlog(blog.id,upBlog)
  }

  const removeBlog = () =>{
    deleteBlog(blog)
  }

  
  return(
        
        <tr key={blog.id} style={blogStyle}>
            <td>{blog.title} <button onClick={toggleVisibility}>Show</button></td>
            {visible ? (
              <><div>{blog.author}</div>
              <div>{blog.url}</div>
              <div>{blog.likes}<button onClick={upLikes}>like</button></div>
              <div>
              {(blog.user === userId || blog.user === userId ) &&(<button onClick={removeBlog}>delete</button>)}
                </div>
              </>
            ):null}
            
            
            
          </tr>
       
    
  )
}


  


export default Blog