/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const itemCounter = {};
  const result = [];

  for (let i = 0; i < names.length; i++) {
    let item = names[i];
    if (itemCounter[item] === undefined) {
      if (result.includes(item)) {
        itemCounter[item] = 1;
        item += `(${itemCounter[item]})`;
      } else {
        itemCounter[item] = 0;
      }
      result.push(item);
    } else {
      itemCounter[item] += 1;
      const count = itemCounter[item];
      item += `(${count})`;
      result.push(item);
    }
  }
  return result;
}

module.exports = renameFiles;
