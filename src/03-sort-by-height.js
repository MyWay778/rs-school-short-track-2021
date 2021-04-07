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
  const array = [...arr];
  let entireArrSort = false;

  while (!entireArrSort) {
    entireArrSort = true;

    for (let i = 0; i < array.length; i++) {
      let step = 1;
      let sorted = false;

      if (array[i] !== -1) {
        while (!sorted) {
          if (array[i + step] !== -1) {
            if (array[i] > array[i + step]) {
              const temp = array[i + step];
              array[i + step] = array[i];
              array[i] = temp;
              entireArrSort = false;
            }
            sorted = true;
          } else {
            step++;
          }
        }
      }
    }
  }

  return array;
}

module.exports = sortByHeight;
