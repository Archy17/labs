function betweenTwoSets(setA, setB) {
  let res = 0
  const last = setB[setB.length -1]

  for (let i = 1; i <= last; i += 1) {
    const a = setA.some(el => i % el !== 0)
    const b = setB.some(el => el % i !== 0)

    if (!a && !b) res += 1
  }

  return res
}

module.exports = betweenTwoSets
