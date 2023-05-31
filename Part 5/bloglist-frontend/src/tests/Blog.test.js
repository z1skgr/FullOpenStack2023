import React from 'react'
import '@testing-library/jest-dom/extend-expect'
// eslint-disable-next-line no-unused-vars
import { render, screen  } from '@testing-library/react'
//import { fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Blog from '../components/Blog'

const blog = {
  title:'TUC University',
  author:'Christos Ziskas',
  url:'https://tuc.gr/',
  likes:7
}
let mockUpdateBlog = jest.fn()
let mockDeleteBlog = jest.fn()
let user = userEvent.setup()


beforeEach(() => {
  mockUpdateBlog = jest.fn()
  mockDeleteBlog = jest.fn()
  user = userEvent.setup()
  render(<Blog blog={blog} updatedBlog={mockUpdateBlog} deleteBlog={mockDeleteBlog} />)

})


describe('part5.13', () => {

  test('Render title and author', () => {
    const element = screen.getByText('TUC University / Christos Ziskas')
    expect(element).toBeDefined()
  })

})

describe('part 5.14', () => {
  test('URL, likes details after button clicked', async () => {

    await user.click(document.querySelector('button'))

    //fireEvent.click(document.querySelector("button"));
    const elementUrl = screen.getByText('https://tuc.gr/')
    const elementLike = screen.getByText(7)
    expect(elementUrl).toBeDefined()
    expect(elementLike).toBeDefined()
  })

})

describe('part 5.15', () => {
  test('like button is clicked twice, the event handler is called twice.', async () => {
    await user.click(document.querySelector('button'))

    const likeButton = screen.getByText('like')
    await user.click(likeButton)
    expect(mockUpdateBlog.mock.calls).toHaveLength(1)
    await user.click(likeButton)
    expect(mockUpdateBlog.mock.calls).toHaveLength(2)
  })

})


