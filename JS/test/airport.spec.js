const assert = require('chai').assert;
const PassengerPlane = require('../Planes/PassengerPlane');
const Airport = require('../Airport');
const MilitaryType = require('../models/MilitaryType');
const ClassificationLevel = require('../models/ClassificationLevel');
const planes = require('../Index');

describe('Airport tests decription', () => {

    let planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);

    it('check military planes has transport type', () => {
        let airport = new Airport(planes),
            transportMilitaryPlanes = airport.getTransportMilitaryPlanes(),
            flag = false;
        for (let militaryPlane of transportMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === MilitaryType.TYPE_TRANSPORT) {
                flag = true;
                break;
            }
        }
        assert.equal(flag, false);
    });

    it('check plane with max passenger capacity', () => {
        let airport = new Airport(planes),
            expectedPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.isFalse(expectedPlaneWithMaxPassengersCapacity === planeWithMaxPassengerCapacity);
    });


    it('check planes with max load capacity', () => {
        let airport = new Airport(planes),
            planesSortedByMaxLoadCapacity = airport.getPlanes(),
            nextPlaneMaxLoadCapacityIsHigherThanCurrent = true;
        for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
            let currentPlane = planesSortedByMaxLoadCapacity[i],
                nextPlane = planesSortedByMaxLoadCapacity[i + 1];
            if (currentPlane.getMaxLoadCapacity() > nextPlane.getMaxLoadCapacity()) {
                nextPlaneMaxLoadCapacityIsHigherThanCurrent = false;
                break;
            }
        }
        assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent);
    })

    it('check existence of bomber type in military planes', () => {
        let airport = new Airport(planes),
            bomberMilitaryPlanes = airport.getBomberMilitaryPlanes(),
            flag = false;
        for (let militaryPlane of bomberMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === MilitaryType.TYPE_BOMBER) {
                flag = true;
            } else {
                assert.fail("Test failed!");
            }
        }
    });

    it('check experimental planes has classification level higher than unclassified', () => {
        let airport = new Airport(planes),
            bomberMilitaryPlanes = airport.getExperimentalPlanes(),
            hasUnclassifiedPlanes = false;
        for (let experimentalPlane of bomberMilitaryPlanes) {
            if (experimentalPlane.classificationLevel === ClassificationLevel.UNCLASSIFIED) {
                hasUnclassifiedPlanes = true;
            }
            assert.isFalse(hasUnclassifiedPlanes);
        }
    });
});