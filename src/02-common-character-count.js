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
  // sample is a shorter string
  const sample = s1.length <= s2.length ? s1 : s2;
  // array from another string
  const array = Array.from(sample === s1 ? s2 : s1);
  let result = 0;

  for (let i = 0; i < sample.length; i++) {
    const index = array.indexOf(sample[i]);
    // if the array contains the desired character,
    // iterate result and delete this item from the array
    if (index !== -1) {
      result++;
      delete array[index];
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
