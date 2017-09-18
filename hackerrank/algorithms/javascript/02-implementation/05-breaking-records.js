function breakingRecords(scores) {
  let max = scores[0]
  let min = scores[0]
  let maxBreaks = 0
  let minBreaks = 0
  
  scores
    .slice(1)
    .forEach(score => {
      if (score > max) {
        max = score
        maxBreaks += 1
      } else if (score < min) {
        min = score
        minBreaks += 1
      }
    })

  return [maxBreaks, minBreaks]
}

module.exports = breakingRecords
