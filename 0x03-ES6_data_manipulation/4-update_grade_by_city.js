const updateStudentGradeByCity = (listOfStudents, city, newGrades) => {
  if (!Array.isArray(listOfStudents)) return [];
  if (typeof city !== 'string') return [];

  const studentsInCity = listOfStudents.filter(
    (student) => student.location === city,
  );
  return studentsInCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
};
export default updateStudentGradeByCity;
