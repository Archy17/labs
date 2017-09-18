function birthdayCakeCandles(size, list) {
  const max = Math.max.apply(null, list)

  return list.reduce((acc, el) => el === max ? acc + 1 : acc, 0)
}

module.exports = birthdayCakeCandles
