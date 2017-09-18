const appleOrange = require('./02-apple-and-orange')

test('#appleOrange()', () => {
  expect(appleOrange(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toEqual([1, 1])
})
