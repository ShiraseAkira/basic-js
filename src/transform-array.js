const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const a = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next': {
        a.push(undefined);
        i++;
        break;
      }
      case '--discard-prev': {
        a.pop();
        break;
      }
      case '--double-next': {
          a.push(arr[i + 1]);
        break;
      }
      case '--double-prev': {
          a.push(a[a.length - 1]);
        break;
      }
      default: {
        a.push(arr[i]);
      }
    }
  }

  return a.filter((elem) => elem !== undefined);
}

module.exports = {
  transform
};
