const betweenTwoSets = require('./04-between-two-sets')

test('#betweenTwoSets()', () => {
  expect(betweenTwoSets([2, 4], [16, 32, 96])).toBe(3)
  expect(betweenTwoSets([1], [100])).toBe(9)
  expect(betweenTwoSets([1], [72, 48])).toBe(8)
})
