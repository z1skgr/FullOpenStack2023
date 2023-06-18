import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../reducers/authReducer'
import { Button } from 'react-bootstrap'
import { AppBar, IconButton, Toolbar } from '@mui/material'







const Menu = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)

  const padding = {
    padding: 5
  }

  const style = {
    padding: 5,
    color: 'white'
  }

  const handleLogout = async (event) => {
    event.preventDefault()
    dispatch(logout())
    history.push('/')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        </IconButton>
        <Button color="inherit">
          <Link style={padding} to="/blogs">blogs</Link>
        </Button>
        <Button color="inherit">
          <Link style={padding} to="/users">users</Link>
        </Button>
        <span style={style}>{user.name} logged in {' '}</span>
        <Button variant="danger" onClick={handleLogout} type="submit">
            logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Menu