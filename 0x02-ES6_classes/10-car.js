export default class Car {
    constructor(brand, model, color) {
        this._brand = brand;
        this._model = model;
        this._color = color;
    }

    static get [Symbol.species]() {
        return this;
    }

    cloneCar() {
        const NewObj = this.constructor[Symbol.species];
        return new NewObj();
    }
}
