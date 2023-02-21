const fs = require('fs');

module.exports = async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const students = data
        .split('\n')
        .filter((content) => content)
        .map((student) => student.split(','));
      students.shift();

      const messagesList = [];
      const LENGTH = students.length ? students.length : 0;
      messagesList.push(`Number of students: ${LENGTH}`);
      const fields = {};

      students.forEach((student) => {
        if (student[3] in fields) fields[student[3]].push(student[0]);
        else fields[student[3]] = [student[0]];
      });

      const fieldList = Object.keys(fields);
      fieldList.forEach((field) => {
        let message = `Number of students in ${field}: ${fields[field].length}.`;
        message += ` List: ${fields[field].join(', ')}`;
        messagesList.push(message);
      });
      const customMessage = messagesList.join('\n');
      console.log(customMessage);
      resolve(customMessage);
    });
  });
};
