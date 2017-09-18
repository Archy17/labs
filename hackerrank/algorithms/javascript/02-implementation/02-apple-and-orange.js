function appleOrange(s, t, a, b, apples, oranges) {
  const applesFall = _countHits(apples, s, t, a)
  const orangesFall = _countHits(oranges, s, t, b)

  return [applesFall, orangesFall]
}

function _countHits(list, s, t, l) {
  return list.reduce((acc, el) => {
    return (l + el >= s && l + el <= t) ? acc + 1 : acc
  }, 0)
}

module.exports = appleOrange
