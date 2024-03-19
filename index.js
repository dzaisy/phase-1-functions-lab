// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue <= 42) {
        return 42 - someValue ;
    }
    else {
        return someValue - 42 ;
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // there is 264 feet in 1 block
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264
    }
    else {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled < 400) {
        return 0
    }
    else if (distanceTravelled >= 400 && distanceTravelled <=  2000) {
        return (distanceTravelled - 400) * 0.02 // 2 cents per feet charged after the 400
    }
    else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}