// Requiring the lodash library
const __ = require('lodash')

/* eslint-disable no-unused-vars */
const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {

  const reducer = (sum, item) => {
    return sum + item.likes
  }
  return blogs.length === 0
    ? 0
    : blogs.reduce(reducer, 0)

}

const favoriteBlog = (blogs) => {

  const reducer = (max, item) => {
    return item.likes > max ? item.likes : max
  }
  return blogs.length === 0
    ? {} : blogs.reduce(reducer, blogs[0].likes)
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return {}

  const authorCount = __.countBy(blogs, 'author')

  const topAuthor = Object.keys(authorCount).reduce((a, b) => {
    return authorCount[a] > authorCount[b] ? a : b
  })

  return {
    author: topAuthor,
    blogs: authorCount[topAuthor],
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return {}

  const likesCount = __(blogs)
    .groupBy('author')
    .map((objs, key) => ({
      author: key,
      likes: __.sumBy(objs, 'likes'),
    }))
    .value()

  return likesCount.reduce((a, b) => {
    return a.likes > b.likes ? a : b
  })
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}