const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nStr = String(n);
  let DigitToRemove = '';
  
  for(let i = 0; i < nStr.length - 1; i++) {
    if (nStr[i] < nStr[i+1]) {
      DigitToRemove = nStr[i];
      break;
    }
  }

  if (DigitToRemove === '') {
    DigitToRemove = nStr[nStr.length - 1]
  }

  // nStr.split('').sort()[0];
  
  let DigitToRemoveIndex = nStr.indexOf(DigitToRemove);
  return Number(nStr.slice(0,DigitToRemoveIndex) + nStr.slice(DigitToRemoveIndex + 1))
}

module.exports = {
  deleteDigit
};
