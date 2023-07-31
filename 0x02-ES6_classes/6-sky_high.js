import Building from "./5-building";

export default class SkyHighBuilding extends Building {
    constructor(sqdt, floors) {
        super(sqdt);
        this._floors = floors;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this.floors} floors`;
    }

    get sqft() {
        return this._sqft;
    }

    get floors() {
        return this._floors;
    }
}
