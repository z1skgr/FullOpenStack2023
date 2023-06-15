import PropTypes from 'prop-types'

const LoginForm = (props) => (
  <>
    <form onSubmit={props.handleLogin}>
      <div>
        username
        <input
          type="text"
          id="username"
          value={props.username}
          name="Username"
          onChange={props.setUsername}
        />
      </div>
      <div>
        password
        <input
          type="password"
          id="password"
          value={props.password}
          name="Password"
          onChange={props.setPassword}
        />
      </div>

      <button id="login-button" type="submit">
        login
      </button>
    </form>
  </>
)

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default LoginForm
