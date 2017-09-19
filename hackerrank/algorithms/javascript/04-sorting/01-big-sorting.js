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

module.exports = bigSorting
