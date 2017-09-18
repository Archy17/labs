function gradingStudents(list) {
  return list.map(_roundGrade)
}

function _roundGrade(grade) {
  const rem = grade % 5
  const res = (grade <= 37 || rem <= 2) ? grade : grade + (5 - rem)

  return res
}

module.exports = gradingStudents
