function staircase(size) {
  let stair = ''

  for (let i = 1; i <= size; i += 1) {
    const str = Array(i + 1).join('#')

    stair += `${str.padStart(size)}\n`
  }

  return stair.substring(0, stair.length - 1)
}

module.exports = staircase
