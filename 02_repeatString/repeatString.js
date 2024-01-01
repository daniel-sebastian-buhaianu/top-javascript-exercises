const repeatString = function(string, numberOfTimes) {
  if (numberOfTimes < 0) return "ERROR";
  let newString = '';
  while (numberOfTimes > 0)
  {
    newString += string;
    numberOfTimes--;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
