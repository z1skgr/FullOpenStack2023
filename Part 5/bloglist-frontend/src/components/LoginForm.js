import Message from "./Message";

const loginForm = (handleLogin, username, password, setUsername, setPassword, message) => (
    <><form onSubmit={handleLogin}>
    <div>
      username
      <input
        type="text"
        value={username}
        name="Username"
        onChange={({ target }) => setUsername(target.value)} />
    </div>
    <div>
      password
      <input
        type="text"
        value={password}
        name="Password"
        onChange={({ target }) => setPassword(target.value)} />
    </div>

    <button type="submit">login</button>
  </form>
  <Message message={message} /></> 
  )

  
export default loginForm