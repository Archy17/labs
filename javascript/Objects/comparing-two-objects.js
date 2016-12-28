module.exports = function(a, b) {
  const aComp = Object
    .keys(a)
    .concat(Object.values(a))
    .toString();
  const bComp = Object
    .keys(b)
    .concat(Object.values(b))
    .toString();

  console.log(aComp);
  console.log(bComp);

  return aComp === bComp;
}

