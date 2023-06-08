const convertToCelsius = function(far) {
  let ans = far - 32;
  ans *= 5;
  ans/=9;

  return +(ans.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  let ans = cel * 9;
  ans /= 5;
  ans += 32;

  return +(ans.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
