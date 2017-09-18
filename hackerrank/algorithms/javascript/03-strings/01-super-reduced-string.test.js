const superReducedStrings = require('./01-super-reduced-string')

test('#superReducedStrings()', () => {
  expect(superReducedStrings('aaabccddd')).toBe('abd')
  expect(superReducedStrings('baab')).toBe('Empty String')
  expect(superReducedStrings('aa')).toBe('Empty String')
})
