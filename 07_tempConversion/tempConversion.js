const convertToCelsius = function(degreesFahrenheit) {
  const degreesCelsius = (degreesFahrenheit-32)*5/9;
  // return degreesCelsius using one decimal point
  return Math.round(degreesCelsius*10)/10;
};

const convertToFahrenheit = function(degreesCelsius) {
  const degreesFahrenheit = degreesCelsius*(9/5)+32;
  // return degreesFahrenheit using one decimal point
  return Math.round(degreesFahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
