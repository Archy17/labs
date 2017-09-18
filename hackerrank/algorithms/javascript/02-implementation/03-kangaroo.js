/*
function kangaroo(x1, v1, x2, v2) {
  let p1 = x1;
  let p2 = x2;
  let res = '';

  while(true) {
    if (p1 === p2) {
      res = 'YES'
      break
    } else if ((p1 > p2 && v1 >= v2) || (p2 > p1 && v2 >= v1)) {
      res = 'NO'
      break
    }

    p1 += v1
    p2 += v2
  }

  return res
}
*/

function kangaroo(x1, v1, x2, v2) {
  if (x1 === x2) {
    return 'YES'
  } else if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) {
    return 'NO'
  }

  return kangaroo(x1 + v1, v1, x2 + v2, v2)
}

module.exports = kangaroo
