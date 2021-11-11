const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');

class Airport {

    getPassengerPlane() {
        let passengerPlane = [];
        for (const p of passengerPlane) {
            if (p instanceof PassengerPlane) {
                passengerPlane.push(p);
            }
        }
        return passengerPlane;
    }

    getMilitaryPlanes() {
        const militaryPlanes = [];
        for (const el of militaryPlanes) {
            if (el instanceof MilitaryPlane) {
                militaryPlanes.push(el);
            }
        }
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlane(),
            planeWithMaxCapacity = passengerPlanes[0];
        for (const elem of passengerPlanes) {
            if (elem.getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = elem;
            }
        }
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes() {
        const transportMilitaryPlanes = [],
            militaryPlanes = this.getMilitaryPlanes();
        for (const elem of militaryPlanes) {
            if (elem.getMilitaryType() === MilitaryType.TYPE_TRANSPORT) {
                transportMilitaryPlanes.push(elem);
            }
        }
        return transportMilitaryPlanes;
    }

    getBomberMilitaryPlanes() {
        const bomberMilitaryPlanes = [],
            militaryPlanes = this.getMilitaryPlanes();
        for (const item of militaryPlanes) {
            if (item.getMilitaryType() === MilitaryType.TYPE_BOMBER) {
                bomberMilitaryPlanes.push(item);
            }
        }
        return bomberMilitaryPlanes;
    }

    constructor(planes) {
        this.planes = planes;
    }

    getExperimentalPlanes() {
        const experimentalPlanes = [];
        for (const el of experimentalPlanes) {
            if (el instanceof ExperimentalPlane) {
                experimentalPlanes.push(el);
            }
        }
        return experimentalPlanes;
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMS() > b.getMS()) ? 1 : -1);
        return this;
    }

    getPlanes() {
        return this.planes;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
