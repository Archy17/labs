/*
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
*/

function superReducedString(str) {
  const res = _reduceStr(str, str.length + 1)

  return res || 'Empty String'
}

function _reduceStr(str, previousSize) {
  const res = str.replace(/(.)\1/g, '')
  const size = res.length

  if (previousSize <= size) return res

  return _reduceStr(res, size)
}

module.exports = superReducedString
