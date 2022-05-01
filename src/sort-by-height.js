const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const heightSorted = arr.filter(elem => elem != -1).sort((first, second) => first - second);
  const template = arr.map(elem => elem == -1 ? elem : null);

  for (const height of heightSorted) {
    template[template.indexOf(null)] = height;
  }

  return template;
}

module.exports = {
  sortByHeight
};
