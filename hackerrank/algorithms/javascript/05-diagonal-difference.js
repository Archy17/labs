function diagonalDifference(matrix) {
  const size = matrix.length
  const res = matrix.reduce((acc, row, index) => {
    return acc + (row[index] - row[size - (1 + index)])
  }, 0)

  return Math.abs(res)
}

module.exports = diagonalDifference
