import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((fields) => {
        const responseList = ['This is the list of our students'];
        console.log(fields);
        Object.keys(fields).forEach((field) => {
          const message = `Number of students in ${field}: ${
            fields[field].length
          }. List: ${fields[field].join(', ')}`;
          responseList.push(message);
        });
        res.status(200).send(responseList.join('\n'));
      })
      .catch((err) => res.status(500).send(err.message));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const fields = ['CS', 'SWE'];
    if (!fields.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((fields) => {
        const responseList = [];
        Object.keys(fields).forEach((field) => {
          if (field !== major) return;
          const message = `List: ${fields[field].join(', ')}`;
          responseList.push(message);
        });
        res.status(200).send(responseList.join('\n'));
      })
      .catch((err) => res.status(500).send(err.message));
  }
}
export default StudentsController;
