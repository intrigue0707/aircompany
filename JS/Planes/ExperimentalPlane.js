const Plane = require('./Plane');

class ExperimentalPlane extends Plane
{
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel)  {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._classificationLevel = classificationLevel;

    }
    get classificationLevel() {
        return this._classificationLevel;
    }

    set classificationLevel(value) {
        this._classificationLevel = value;
    }
}

module.exports = ExperimentalPlane