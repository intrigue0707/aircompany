class Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }
    getMS() {
        return this.maxSpeed;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    getMaxLoadCapacity() {
        return this.maxLoadCapacity;
    }
}

module.exports = Plane;
