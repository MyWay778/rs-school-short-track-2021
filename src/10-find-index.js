/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let middle = Math.round((array.length - 1) / 2);

  while (array[middle] !== value) {
    if (value > array[middle]) {
      middle = Math.round(middle / 2 + middle);
      if (middle > array.length - 1) {
        middle = array.length - 1;
      }
    } else {
      middle = Math.floor(middle / 2);
    }
  }
  return middle;
}

module.exports = findIndex;
