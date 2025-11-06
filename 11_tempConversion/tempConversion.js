// mine works too, but:
  // the solution is more compact because it's only one line inside each function
  // toFixed() returns a string, so must use parseFloat() to turn it back into a number
  // and always returns a decimal place even if it's a 0
//return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
//return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;

const convertToCelsius = function(tempFahr) {
  let tempCels = (tempFahr - 32) * (5/9);
  return tempCels.toFixed(1);
};

const convertToFahrenheit = function(tempCels) {
  let tempFahr = tempCels * (9/5) + 32;
  return tempFahr.toFixed(1);
};
convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
