const gradingStudents = require('./01-grading-students')

test('#gradingStudents()', () => {
  expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33])
})
