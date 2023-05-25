const Blog = ({blog}) => (
  <div>
     <table> 
      <tr>
        <td>{blog.title}</td> 
        <td>{blog.author}</td>
        <td>{blog.url}</td>
      </tr>
    </table>
  </div>  
)

export default Blog