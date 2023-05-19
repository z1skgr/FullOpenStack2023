const listHelper = require('../utils/list_helper')

const emptyList = []

describe('part 4.3', () => {

  test('dummy returns one', () => {
    const result = listHelper.dummy(emptyList)
    expect(result).toBe(1)
  })

})