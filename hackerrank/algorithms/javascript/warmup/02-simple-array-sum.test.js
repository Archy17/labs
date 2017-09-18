const SimpleArraySum = require('./02-simple-array-sum')

test('sums all array elements', () => {
  expect(SimpleArraySum(6, [1, 2, 3, 4, 10, 11])).toBe(31)
  expect(SimpleArraySum(5, [5, 10, 15, 25, 50])).toBe(105)
  expect(SimpleArraySum(4, [100, 10, 1, 0])).toBe(111)
})
