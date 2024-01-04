const fibonacci = index => {
  if (index < 0)
    return "OOPS";
  if (index == 0)
    return 0;
  if (index == 1)
    return 1;
  let x = 0;
  let y = 1;
  let z;
  for (let i = 2; i <= index; i++)
  {
    z = x + y;
    x = y;
    y = z;
  }
  return z;
};

// Do not edit below this line
module.exports = fibonacci;
