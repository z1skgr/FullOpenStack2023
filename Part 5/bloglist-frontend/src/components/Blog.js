import { useState } from "react";

const Blog = ({blog,updatedBlog}) => {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const upLikes = () =>{
    console.log('Add a like')
    const upBlog = {
      ...blog,
      likes:blog.likes+1
    }
    updatedBlog(blog.id,upBlog)
  }

  
  return(
        
        <tr key={blog.id} style={blogStyle}>
            <td>{blog.title} <button onClick={toggleVisibility}>Show</button></td>
            {visible ? (
              <><div>{blog.author}</div>
              <div>{blog.url}</div>
              <div>{blog.likes}<button onClick={upLikes}>like</button></div>
              </>
            ):null}
            
            
            
          </tr>
       
    
  )
}


  


export default Blog