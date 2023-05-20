const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [{
  id:'f9',
  title:'Go To Crete-Chania',
  author:'Me and You my darling',
  url:'http://www.crete.marathons.html',
  likes:15
},
{
  id:'f10',
  title:'Go To Crete-Hrakleion',
  author:'You and Me my love',
  url:'http://www.crete.marathons.html',
  likes:16
}
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const blogsLength = async () => {
  const blogs = await Blog.find({})
  return blogs.length
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}



module.exports = {
  initialBlogs,
  blogsInDb,
  blogsLength,
  usersInDb
}