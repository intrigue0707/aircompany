const assert = require('chai').assert;
const PassengerPlane = require('../Planes/PassengerPlane');
const Airport = require('../Airport');
const MilitaryType = require('../models/MilitaryType');
const ClassificationLevel = require('../models/ClassificationLevel');
let planes = require('../Index');

describe('There should be clear description of test', () => {

    let planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);

    it('should have military planes with transport type', () => {
        let airport = new Airport(planes);
        let transportMilitaryPlanes = airport.getTransportMilitaryPlanes();
        let flag = false;
        for (let militaryPlane of transportMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === MilitaryType.TYPE_TRANSPORT) {
                flag = true;
                break;
            }
        }
        assert.equal(flag,false);
    });

    it('check passenger plane with max capacity', () => {
        let airport = new Airport(planes),
            expectedPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.isFalse( expectedPlaneWithMaxPassengersCapacity === planeWithMaxPassengerCapacity);
    });


    it('check planes with max capacity', () => {
        let airport = new Airport(planes);
        let planesSortedByMaxLoadCapacity = airport.getPlanes();
        let nextPlaneMaxLoadCapacityIsHigherThanCurrent = true;
        for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
            let currentPlane = planesSortedByMaxLoadCapacity[i];
            let nextPlane = planesSortedByMaxLoadCapacity[i + 1];
            if (currentPlane.getMaxLoadCapacity() > nextPlane.getMaxLoadCapacity()) {
                nextPlaneMaxLoadCapacityIsHigherThanCurrent = false;
                break;
            }
        }
        assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent);
    })

    it('testHasAtLeastOneBomberInMilitaryPlanes', () => {
        let airport = new Airport(planes);
        let bomberMilitaryPlanes  = airport.getBomberMilitaryPlanes ();
        let flag = false;
        for (let militaryPlane of bomberMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === MilitaryType.TYPE_BOMBER) {
                flag = true;
            }
            else{
                assert.fail("Test failed!");
            }
        }
    })

    it('should check that experiments planes has classification level higher than unclassified', () => {
        let airport = new Airport(planes);
        let bomberMilitaryPlanes  = airport.getExperimentalPlanes ();
        let hasUnclassifiedPlanes  = false;
        for (let experimentalPlane  of bomberMilitaryPlanes) {
            if (experimentalPlane.classificationLevel === ClassificationLevel.UNCLASSIFIED) {
                hasUnclassifiedPlanes = true;

        }
        assert.isFalse(hasUnclassifiedPlanes);

        }
    });

});



