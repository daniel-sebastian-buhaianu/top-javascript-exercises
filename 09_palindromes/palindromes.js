function isAlphaNumeric(character)
{
  const code = character.charCodeAt(0);
  if (code >= 48 && code <= 57) // [0,9]
    return 1;
  if (code >= 65 && code <= 90) // [A,Z]
    return 1;
  if (code >= 97 && code <= 122) // [a,z]
    return 1;
  return 0;
}
const palindromes = string => {
  const chars = string
                  .split('')
                  .filter(char => isAlphaNumeric(char))
                  .map(char => char.toLowerCase());
  const reversedChars = [...chars].reverse();
  return chars.toString() === reversedChars.toString();
};
// Do not edit below this line
module.exports = palindromes;
