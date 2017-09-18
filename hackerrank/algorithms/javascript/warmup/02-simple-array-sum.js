function simpleArraySum(size, elements) {
  return elements.reduce((sum, el) => sum + el, 0)
}

module.exports = simpleArraySum
