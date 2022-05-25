const ftoc = function(value) {
 celsiusValue = (value-32) *(5/9);
 roundedValue = Math.round(celsiusValue*10)/10;
 return roundedValue;
};

const ctof = function(value) {
   farenheitValue = (value*(9/5)+32);
   roundedValue = Math.round(farenheitValue*10)/10;
  return roundedValue;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
