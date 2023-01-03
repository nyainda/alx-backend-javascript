const getStudentsByLocation = (listOfStudents, city) => {
  if (!Array.isArray(listOfStudents)) return [];
  if (typeof city !== 'string') return [];
  return listOfStudents.filter((student) => student.location === city);
};

export default getStudentsByLocation;
