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
  let char = null;
  let counter = 0;
  let result = '';
  for (let i = 0; i <= str.length; i++) {
    if (char !== str[i]) {
      if (char) {
        result += (counter === 1 ? '' : counter) + char;
        counter = 0;
      }

      char = str[i];
    }
    counter++;
  }
  return result;
}

module.exports = encodeLine;
