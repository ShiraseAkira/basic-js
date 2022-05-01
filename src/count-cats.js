const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // return matrix.reduce((previousValue, currentLine) => previousValue + currentLine.reduce((previousValue, currentElement) => currentElement === '^^' ? previousValue + 1: previousValue, 0), 0)
  let cats = 0;
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        cats++;
      }
    }
  }

  return cats;
}

module.exports = {
  countCats
};
