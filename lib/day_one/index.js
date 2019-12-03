const fs = require('fs');

calculateFuel = (mass, totalFuelMass = 0) => {
  let fuelForMass = Math.floor(mass / 3) - 2;

  if (fuelForMass < 0) { fuelForMass = 0 }

  totalFuelMass = totalFuelMass + fuelForMass;

  if (fuelForMass == 0) {
    return totalFuelMass;
  } else {
    return calculateFuel(fuelForMass, totalFuelMass);
  }

  return totalFuelMass;
}

main = () => {
  const rawData = fs.readFileSync('/home/ruslan/Code/advent/lib/day_one/data.txt', 'utf-8');
  const datapoints = rawData.replace(/\n$/, '').split('\n')

  const fuelRequired = datapoints.map(datapoint => {
    return calculateFuel(parseFloat(datapoint));
  })

  let totalFuelRequired = fuelRequired.reduce((sum, mass) => sum + mass, 0);

  console.log(totalFuelRequired);
}

main();

