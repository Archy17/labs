function compareTriplets(a0, a1, a2, b0, b1, b2) {
  const aPoints = [a0, a1, a2]
  const bPoints = [b0, b1, b2]

  return aPoints.reduce((acc, el, index) => {
    const aux = el - bPoints[index]

    if (aux === 0) {
      return acc
    }
    else if (aux > 0) {
      return [acc[0] + 1, acc[1]]
    }
    else {
      return [acc[0], acc[1] + 1]
    }
  }, [0, 0])
}

module.exports = compareTriplets
