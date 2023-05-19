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



module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}