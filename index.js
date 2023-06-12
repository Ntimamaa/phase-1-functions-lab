function distanceFromHqInBlocks(someValue) {
    let distance = Math.abs(someValue - 42)
    return distance;
  }
  distanceFromHqInBlocks(43);

function distanceFromHqInFeet(someValue) {
  let distanceInBlocks = distanceFromHqInBlocks(someValue);
  let distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet;
}
distanceFromHqInFeet(32)

function distanceTravelledInFeet(start, destination) {
    let totalFeet = Math.abs((destination - start)*264);
    return totalFeet;
  }

function calculatesFarePrice(start, destination) {
    let distanceTraveled = distanceTravelledInFeet(start,destination);
    if(distanceTraveled <= 400){
        return 0.00
    }
    else if(distanceTraveled > 400 && distanceTraveled <= 2000){
        return ((distanceTraveled - 400) * 0.02)
    }
    else if(distanceTraveled <= 2500){
        return 25.0
    }
    else{
        return 'cannot travel that far'
    }

  }