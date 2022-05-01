const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a1 = s1.split('').sort();
  let a2 = s2.split('').sort();
  let counter = 0;
  while (a1.length > 0 && a2.length > 0) {
    if (a1[a1.length - 1] === a2[a2.length - 1]) {
      counter++;
      a1.pop();
      a2.pop();
    } else if (a1[a1.length - 1] > a2[a2.length - 1]) {
      a1.pop();
    } else {
      a2.pop();
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
