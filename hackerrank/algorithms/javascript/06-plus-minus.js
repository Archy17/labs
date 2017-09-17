function plusMinus(size, list) {
  const res = list.reduce((acc, el) => {
    if (el > 0) {
      return Object.assign({}, acc, { pos: acc.pos + 1 })
    }
    else if (el < 0) {
      return Object.assign({}, acc, { neg: acc.neg + 1 })
    }
    else {
      return Object.assign({}, acc, { zero: acc.zero + 1 })
    }
  }, { pos: 0, neg: 0, zero: 0 })

  return [_div(res.pos, size, 6), _div(res.neg, size, 6), _div(res.zero, size, 6)]
}

function _div(numerator, denominator, precision) {
  return Number((numerator / denominator).toPrecision(precision))
}

module.exports = plusMinus
