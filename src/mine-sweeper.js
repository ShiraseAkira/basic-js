const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function getMinesCount(row, col) {
    let count = 0;
    for(let i = row - 1; i <= row + 1; i++){
      for(let j = col - 1; j <= col + 1; j++){
        if(i === row && j === col
          || matrix[i] === undefined) {
          continue;
        }
        count += matrix[i][j] === false || matrix[i][j] === undefined ? 0 : 1;
      }
    }
    return count;
  }
  const mineField = [];
  for (let i = 0; i < matrix.length; i++) {
    const mineFiledRow = [];
    for(let j = 0; j <  matrix[i].length; j++) {
      mineFiledRow.push(getMinesCount(i, j));
    }
    mineField.push(mineFiledRow);
  }

  return mineField;
}

module.exports = {
  minesweeper
};
