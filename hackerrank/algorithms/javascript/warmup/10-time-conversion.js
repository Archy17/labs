function timeConversion(time) {
  let h = ''; // hours
  let m = ''; // minutes
  let s = ''; // seconds
  let p = ''; // period
  let n = ''; // new hours

  [h, m, s] = time.split(':')
  p = s.substring(2)
  s = s.substring(0, 2)

  if (h === '12' && p === 'AM') {
    n = '00'
  } else if (h === '12' && p === 'PM') {
    n = '12'
  } else if (p === 'AM') {
    n = h
  } else if (p === 'PM') {
    n = Number(h) + 12
  }

  return `${n}:${m}:${s}`
}

module.exports = timeConversion
