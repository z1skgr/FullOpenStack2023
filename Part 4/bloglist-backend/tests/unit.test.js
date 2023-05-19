const listHelper = require('../utils/list_helper')

const emptyList = []


const blogList = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra world',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }

]

const blogsList = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra world',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },{
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Thess',
    author: 'Leonidas Zogos',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Go to Athens',
    author: 'Thalia Gk',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0,
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'Go to Crete',
    author: 'Maria Manarwlh',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 15,
    __v: 0,
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'Go to Chalepa',
    author: 'Panagiotis Savvaidhs',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 20,
    __v: 0,
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Go to Giannitsa',
    author: 'Thodoris Grigoriadhs',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 22,
    __v: 0,
  },{
    _id: '5a422b3a1b54a676234d17f10',
    title: 'Go to Athens in 2024',
    author: 'Thalia Gk',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 8,
    __v: 0,
  }
]

describe('part 4.3', () => {

  test('dummy returns one', () => {
    const result = listHelper.dummy(emptyList)
    expect(result).toBe(1)
  })

  test('dummy returns one, one element', () => {
    const result = listHelper.dummy(blogList)
    expect(result).toBe(1)
  })

  test('dummy returns one, many element', () => {
    const result = listHelper.dummy(blogsList)
    expect(result).toBe(1)
  })

})


describe('part 4.4', () => {
  test('No element In List equals zero likes', () => {

    const resultNoBlogInList = listHelper.totalLikes(emptyList)
    expect(resultNoBlogInList).toBe(0)
  })

  test('One element In List equals the likes of that element (blog)', () => {

    const resultOneBlogInList = listHelper.totalLikes([blogList[0]])
    expect(resultOneBlogInList).toBe(blogList[0].likes)
  })

  test('Many element In List equals the likes of all elements (blogs)', () => {

    const resultManyBlogsInList = listHelper.totalLikes(blogsList)
    expect(resultManyBlogsInList).toBe(92)
  })

})


describe('part 4.5', () => {
  test('No element In List equals no favorite', () => {
    const resultEmptyBlogList = listHelper.favoriteBlog(emptyList)
    expect(resultEmptyBlogList).toEqual({})
  })

  test('One element In List equals it is favorite (blog)', () => {
    const maxLikes = listHelper.favoriteBlog([blogList[0]])
    const favoriteBlog = blogList.find(blog => blog.likes === maxLikes)
    expect(favoriteBlog).toEqual(blogList[0])
  })

  test('Many element In List equals someone is favourite', () => {
    const maxLikes = listHelper.favoriteBlog(blogsList)
    const favoriteBlog = blogsList.find(blog => blog.likes === maxLikes)
    expect(favoriteBlog).toEqual({
      _id: '5a422bc61b54a676234d17fc',
      title: 'Go to Giannitsa',
      author: 'Thodoris Grigoriadhs',
      url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      likes: 22,
      __v: 0,
    })
  })

})