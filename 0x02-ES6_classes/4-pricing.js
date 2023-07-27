import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
      this._amount = amount;
      this._currency = currency;
    }
  
    // Getter for amount
    get amount() {
      return this._amount;
    }
  
    // Setter for amount
    set amount(newAmount) {
      if (typeof newAmount === 'number') {
        this._amount = newAmount;
      } else {
        throw new Error('Amount must be a number');
      }
    }
  
    // Getter for currency
    get currency() {
      return this._currency;
    }
  
    // Setter for currency
    set currency(newCurrency) {
      if (newCurrency instanceof Currency) {
        this._currency = newCurrency;
      } else {
        throw new Error('Currency must be an instance of Currency class');
      }
    }
  
    // Method to display full price format
    displayFullPrice() {
      const { _name, _code } = this._currency;
      return `${this._amount} ${_name} (${_code})`;
    }
  
    // Static method to convert price
    static convertPrice(amount, conversionRate) {
      if (typeof amount === 'number' && typeof conversionRate === 'number') {
        return amount * conversionRate;
      } else {
        throw new Error('Amount and conversionRate must be numbers');
      }
    }
}
