const LoginForm = (props) => (
  <><form onSubmit={props.handleLogin}>
  <div>
    username
    <input
      type="text"
      value={props.username}
      name="Username"
      onChange={props.setUsername} />
  </div>
  <div>
    password
    <input
      type="password"
      value={props.password}
      name="Password"
      onChange={
         props.setPassword} />
  </div>

  <button type="submit">login</button>
</form></> 
)


export default LoginForm