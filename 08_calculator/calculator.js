const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const sum = array => array.reduce((acc, value) => acc + value, 0);
const multiply = array => array.reduce((acc, value) => acc * value, 1);
const power = (number, exponent) => {
  let p = 1;
  for (let e = 0; e < exponent; e++)
    p *= number;
  return p;
};
const factorial = a => {
  let f = 1;
  for (let i = 2; i <= a; i++)
    f *= i;
  return f;	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
