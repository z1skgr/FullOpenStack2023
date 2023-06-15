import React from 'react'
import '@testing-library/jest-dom/extend-expect'
// eslint-disable-next-line no-unused-vars
import { render, screen } from '@testing-library/react'
//import { fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import BlogForm from '../components/BlogForm'

const blog = {
  title: 'TUC',
  author: 'Christos Ziskas',
  url: 'https://tuc.gr/',
  likes: 7,
}

let mockfunc_1 = jest.fn()
let user = userEvent.setup()

beforeEach(() => {
  mockfunc_1 = jest.fn()
  user = userEvent.setup()
  render(<BlogForm createBlog={mockfunc_1} />)
})

describe('part5.16', () => {
  test('test for new blog form. Right details when a new blog is created.', async () => {
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByText('create')

    await user.type(inputs[0], blog.author)
    await user.type(inputs[1], blog.title)
    await user.type(inputs[2], blog.url)
    await user.click(button)

    expect(mockfunc_1.mock.calls).toHaveLength(1)
    console.log(mockfunc_1.mock.calls[0])
    expect(mockfunc_1.mock.calls[0][0].title).toBe('TUC')

    //fireEvent.click(document.querySelector("button"));
  })
})
