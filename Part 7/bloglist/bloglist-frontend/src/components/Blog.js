import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { like, deleteBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false)
  const showWhenVisible = { display: visible ? '' : 'none' }
  const buttonLabel = visible ? 'hide' : 'view'

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const updateLikes = () => {
    dispatch(like(blog))
    dispatch(
      setNotification(`Blog ${blog.title} successfully updated`, 'success', 5)
    )
  }

  const removeBlog = () => {
    dispatch(deleteBlog(blog.id))
    dispatch(
      setNotification(`Blog ${blog.title} successfully deleted`, 'success', 5)
    )
  }

  return (
    <tr>
      <td>
        <div className="blog">
          <div>
            <p>
              <Link to={`/blogs/${blog.id}`}>{blog.title} - {blog.author}</Link>{' '}
              <Button variant="primary" onClick={toggleVisibility}>{buttonLabel}</Button>
            </p>
          </div>
          <div style={showWhenVisible}>
            <p>{'Info:'}</p>


            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow key={blog.id}>
                    <TableCell>
                      {'Url:'}{' '}{<>
                        <a href={blog.url}>{blog.url}</a></>}
                    </TableCell>
                  </TableRow>
                  <TableRow key={blog.id}>
                    <TableCell>
                      {'Votes:'}{' '}{blog.likes}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <p><Button variant="primary" id="like-button" onClick={updateLikes}>
                like
            </Button>
            <Button variant="danger" id="remove" onClick={removeBlog}>
              remove
            </Button>
            </p>
          </div>
        </div>
      </td>
    </tr>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog