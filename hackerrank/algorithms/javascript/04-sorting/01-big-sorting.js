/*
function bigSorting(list) {
  return list.sort((a, b) => {
    const aSize = a.length
    const bSize = b.length
    const aValue = Number(a)
    const bValue = Number(b)

    if (aSize < bSize || aValue < bValue) {
      return -1
    }

    if (aSize > bSize || aValue > bValue) {
      return 1
    }

    // a is equal to b
    return 0
  })
}
*/

function bigSorting(list) {
  return list.sort((a, b) => {
    const aSize = a.length
    const bSize = b.length

    if (a === b) return 0

    if (aSize < bSize) return -1

    if (aSize > bSize) return 1

    for (let i = 0; i <= aSize; i += 1) {
      const aChar = Number(a[i])
      const bChar = Number(b[i])

      if (aChar < bChar) return -1
      if (aChar > bChar) return 1
    }
  })
}

module.exports = bigSorting
