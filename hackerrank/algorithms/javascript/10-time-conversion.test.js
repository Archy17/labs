const timeConversion = require('./10-time-conversion')

test('#timeConversion()', () => {
  expect(timeConversion('07:05:45PM')).toBe('19:05:45')
})
