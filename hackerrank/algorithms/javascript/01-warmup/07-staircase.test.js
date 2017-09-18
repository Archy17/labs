const staircase = require('./07-staircase')

test('create a staircase of size `n`', () => {
  const size6 = 
`     #
    ##
   ###
  ####
 #####
######`
  expect(staircase(6)).toBe(size6)
})
