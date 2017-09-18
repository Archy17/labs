function superReducedString(str) {
  let aux = str
  let size = aux.length
  let cont = true
  let res = ''

  while (cont) {
    res = aux.replace(/(.)\1/g, '')
    const resSize = res.length

    if (size <= resSize) cont = false

    aux = res
    size = resSize
  }

  return res || 'Empty String'
}

module.exports = superReducedString
