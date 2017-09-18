const diagonalDifference = require('./05-diagonal-difference')

test('find the diagonal difference of a matrix', () => {
  matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]

  matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [-1, -2, -3, -4],
    [-5, -6, -7, -8],
  ]

  expect(diagonalDifference(matrix)).toBe(15)
  expect(diagonalDifference(matrix2)).toBe(8)
})
