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
  const result = [];
  matrix.forEach((item) => {
    result.push(Array(item.length).fill(0));
  });

  const checkMineAround = (row, column) => {
    let mines = 0;
    const startRow = row === 0 ? 0 : row - 1;
    const startColumn = column === 0 ? 0 : column - 1;

    const lastRow = row === matrix.length - 1 ? row : row + 1;
    const lastColumn = column === matrix[0].length - 1 ? column : column + 1;

    for (let i = startRow; i <= lastRow; i++) {
      for (let y = startColumn; y <= lastColumn; y++) {
        if (matrix[i] && matrix[i][y]) {
          mines += 1;
        }
      }
    }
    return mines;
  };

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (matrix[i][j]) {
        result[i][j] = 1;
      } else {
        result[i][j] = checkMineAround(i, j);
      }
    }
  }
  return result;
}

module.exports = minesweeper;
