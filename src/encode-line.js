const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedLine = '';
  let sameCharCount = 0;
  let lastChar;
  for(let i = 0; i <= str.length; i++) {
    if (!sameCharCount) {
      lastChar = str[i];
      sameCharCount++;
    } else if (str[i] === str[i - 1]) {
      sameCharCount++;
    } else {
      if(sameCharCount > 1){
        encodedLine += sameCharCount;
      }
      encodedLine += lastChar;
      sameCharCount = 1;
      lastChar = str[i];
    }
  }
  return encodedLine;
}

module.exports = {
  encodeLine
};
