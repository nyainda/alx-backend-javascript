import { readFile } from 'fs';

/* A function that takes in a path and returns a promise. */
const readDatabase = (path) => {
  const newPromise = new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = data
        .split('\n')
        .filter((info) => info)
        .map((student) => student.split(','));
      students.shift();
      const fields = {};
      students.forEach((student) => {
        if (fields[student[3]]) fields[student[3]].push(student[0]);
        else fields[student[3]] = [student[0]];
      });
      resolve(fields);
    });
  });
  return newPromise;
};

export default readDatabase;
