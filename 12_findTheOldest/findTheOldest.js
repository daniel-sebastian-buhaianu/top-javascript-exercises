const findTheOldest = people => {
  const currentYear = (new Date()).getFullYear();
  let oldest = people[0];
  let lastYearAlive = oldest.yearOfDeath
                      ? oldest.yearOfDeath
                      : currentYear;
  let maxAge = lastYearAlive - oldest.yearOfBirth;
  for (let i = 1; i < people.length; i++)
  {
    lastYearAlive = people[i].yearOfDeath
                    ? people[i].yearOfDeath
                    : currentYear;
    const age = lastYearAlive - people[i].yearOfBirth; 
    if (age > maxAge)
    {
      maxAge = age;
      oldest = people[i];
    }
  }
  return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
