function minMaxSum(list) {
  const size = list.length
  const sortedList = list.sort((a, b) => a - b)
  const min = sortedList.slice(0, size - 1).reduce((acc, el) => acc + el, 0)
  const max = sortedList.slice(1, size).reduce((acc, el) => acc + el, 0)

  return `${min} ${max}`
}

module.exports = minMaxSum
