const removeFromArray = function(array, ...elements) {
  elements.forEach(function(element) {
    let filteredArray = array.filter(function(arrayElement) {
      return arrayElement !== element;
    });
    array = filteredArray;
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
