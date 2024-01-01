const reverseString = function(string) {
  const arrayOfChars = string.split('');
  const reversedArrayOfChars = arrayOfChars.reverse();
  return reversedArrayOfChars.join('');
};

// Do not edit below this line
module.exports = reverseString;
