const kangaroo = require('./03-kangaroo')

test('#kangaroo()', () => {
  expect(kangaroo(0, 3, 4, 2)).toBe('YES')
  expect(kangaroo(0, 2, 5, 3)).toBe('NO')
  expect(kangaroo(4523, 8092, 9419, 8076)).toBe('YES')
  expect(kangaroo(1408, 6689, 6730, 4028)).toBe('YES')
  expect(kangaroo(43, 2, 70, 2)).toBe('NO')
})
