const palindromes = function (string) {
    const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const array = string
        .toLowerCase()
        .split("")
        .filter(char => validChars.includes(char))
        .join("");
    
    const reversed = array
        .split('')
        .reverse()
        .join("");
    
    return array === reversed;

    /*const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;*/
};

// Do not edit below this line
module.exports = palindromes;
