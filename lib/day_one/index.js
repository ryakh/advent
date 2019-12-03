const fs = require('fs');

main = () => {
  const rawData = fs.readFileSync('/home/ruslan/Code/advent/lib/day_one/data.txt', 'utf-8');
  const datapoints = rawData.replace(/\n$/, '').split('\n')

  const fuelRequired = datapoints.map(datapoint => {
    return Math.floor(parseFloat(datapoint) / 3) - 2;
  }).map(i => parseInt(i));

  let totalFuelRequired = fuelRequired.reduce((sum, mass) => sum + mass, 0);

  console.log(totalFuelRequired);
}

main();
