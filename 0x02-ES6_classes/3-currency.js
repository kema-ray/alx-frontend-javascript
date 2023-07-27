export default class Currency {
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    // Getter for code
    get code() {
      return this._code;
    }
  
    // Setter for code
    set code(newCode) {
      if (typeof newCode === 'string') {
        this._code = newCode;
      } else {
        throw new Error('Code must be a string.');
      }
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
  
    // Method to display full currency format
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
}
