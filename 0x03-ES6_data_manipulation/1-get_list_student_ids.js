const getListStudents = (listOfStudents) => {
  if (!Array.isArray(listOfStudents)) return [];
  return listOfStudents.map((student) => student.id);
};

export default getListStudents;
