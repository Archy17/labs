const compareTriplets = require('./03-compare-the-triplets')

test('compare points between two persons', () => {
  expect(compareTriplets(5, 6, 7, 3, 6, 10)).toEqual([1, 1])
  expect(compareTriplets(1, 3, 5, 5, 2, 1)).toEqual([2, 1])
  expect(compareTriplets(5, 6, 7, 6, 5, 4)).toEqual([2, 1])
})
