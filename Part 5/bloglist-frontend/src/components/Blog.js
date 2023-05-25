const Blog = ({blog}) => (
  <div>
     <table> 
      <thead>
      <tr>
        <td>{blog.title}</td> 
        <td>{blog.author}</td>
        <td>{blog.url}</td>
      </tr>
      </thead>

    </table>
  </div>  
)

export default Blog