export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    }
    const testArray = students.filter((student) => typeof student !== 'string');
    if (testArray.length > 0) throw new TypeError('students must be strings');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value)) throw new TypeError('Students must be an array');
    const testArray = value.filter((student) => typeof student !== 'string');
    if (testArray.length > 0) throw new TypeError('Students must be strings');
    this._students = value;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
