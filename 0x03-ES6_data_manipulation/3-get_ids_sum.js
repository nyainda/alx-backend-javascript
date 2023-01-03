const getStudentIdsSum = (listOfStudents) => {
  if (!Array.isArray(listOfStudents)) return [];
  return listOfStudents.reduce((actual, store) => actual + store.id, 0);
};

export default getStudentIdsSum;
