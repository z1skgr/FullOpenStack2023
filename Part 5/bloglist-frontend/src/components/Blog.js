const Blog = ({blog}) => (
  <div>
     <table border="3"> 
      <tr><th>Title</th><th>Author</th><th>Url</th>

      </tr>
      {blog.map((blog) => (
        <tr key={blog.id}>
          <td>{blog.title}</td>
          <td>{blog.author}</td>
          <td>{blog.url}</td>
        </tr>
      ))}
    </table>
  </div>  
)

export default Blog