const birthdayCakeCandles = require('./09-birthday-cake-candles')

test('#birthdayCakeCandles()', () => {
  expect(birthdayCakeCandles(4, [3, 2, 1, 3])).toBe(2)
})
