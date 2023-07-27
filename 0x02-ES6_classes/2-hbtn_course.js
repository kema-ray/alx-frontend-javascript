export default class HolbertonCourse {
    constructor(name, length, students) {
      this._name = name;
      this._length = length;
      this._students = Array.isArray(students) ? students : [];
    }
  
    // Getter for name
    get name() {
      return this._name;
    }
  
    // Setter for name
    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        throw new Error('Name must be a string.');
      }
    }
  
    // Getter for length
    get length() {
      return this._length;
    }
  
    // Setter for length
    set length(newLength) {
      if (typeof newLength === 'number') {
        this._length = newLength;
      } else {
        throw new Error('Length must be a number.');
      }
    }
  
    // Getter for students
    get students() {
      return this._students;
    }
  
    // Setter for students
    set students(newStudents) {
      if (Array.isArray(newStudents)) {
        this._students = newStudents;
      } else {
        throw new Error('Students must be an array of strings.');
      }
    }
}
