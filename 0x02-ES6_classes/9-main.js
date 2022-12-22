import listOfStudents from './9-hoisting';

// console.log(listOfStudents);

const listPrinted = listOfStudents.map((student) => {
  console.log(student);
  return student.fullStudentDescription;
});

console.log(listPrinted);
