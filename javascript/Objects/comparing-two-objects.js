module.exports = function(a, b) {
  const aComp = Object
    .keys(a)
    .concat(Object.values(a))
    .toString();
  const bComp = Object
    .keys(b)
    .concat(Object.values(b))
    .toString();

  return aComp === bComp;
}

