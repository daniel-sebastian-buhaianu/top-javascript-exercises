const sumAll = function(firstNumber, lastNumber) {
  if (typeof firstNumber !== "number"
      || typeof lastNumber !== "number"
      || firstNumber < 0
      || lastNumber < 0) return 'ERROR'; 
  const min = firstNumber < lastNumber ? firstNumber : lastNumber;
  const max = firstNumber > lastNumber ? firstNumber : lastNumber;
  let sum = 0;
  for (let i = min; i <= max; i++) sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
