const bigSum = require('./04-big-sum')

test('sum array og big numbers', () => {
  expect(bigSum(5, [1000000001, 1000000002, 1000000003, 1000000004, 1000000005])).toBe(5000000015)
})
