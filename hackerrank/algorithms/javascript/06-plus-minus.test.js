const plusMinus = require('./06-plus-minus')

test('#plusMinus()', () => {
  expect(plusMinus(6, [-4, 3, -9, 0, 4, 1])).toEqual([0.500000, 0.333333, 0.166667])
})
