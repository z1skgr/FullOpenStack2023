import React from 'react'
import '@testing-library/jest-dom/extend-expect'
// eslint-disable-next-line no-unused-vars
import { render, screen  } from '@testing-library/react'
import Blog from '../components/Blog'



const blog = {
  title:'React patterns',
  author:'Michael Chan',
  url:'https://reactpatterns.com/',
  likes:7
}

const mockUpdateBlog = jest.fn()
const mockDeleteBlog = jest.fn()

describe('part5.13', () => {




  test('Render title and author', () => {


    render(<Blog blog={blog} updatedBlog={mockUpdateBlog} deleteBlog={mockDeleteBlog} />)
    const element = screen.getByText('React patterns / Michael Chan')

    expect(element).toBeDefined()
  })

})

