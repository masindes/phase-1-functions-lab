// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if (street < 42) {
      return 42 - street;
    } else {
      return street - 42;
    }
  }
  
  function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(distanceFromHqInFeet(start) - distanceFromHqInFeet(destination));
  }
  
  function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    if (distanceTravelled > 2500) {
      return 'cannot travel that far';
    } else if (distanceTravelled <= 400) {
      return 0;
    } else if (distanceTravelled <= 2000) {
      return (distanceTravelled - 400) * 0.02;
    } else {
      return 25;
    }
  }