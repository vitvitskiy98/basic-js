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
let minesweeper = (matrix) => {
  let field = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];

    for (let k = 0; k < matrix[i].length; k++) {
      let beforeElem = matrix[i][k - 1] ? 1 : 0;
      let nextElem = matrix[i][k + 1] ? 1 : 0;
      let diagonalUpLeftElem = 0;
      let upElem = 0;
      let diagonalUpRightElem = 0;
      let diagonalDownLeftElem = 0;
      let downElem = 0;
      let diagonalDownRightElem = 0;
      let counter = 0;

      if (matrix[i - 1]) {
        diagonalUpLeftElem = matrix[i - 1][k - 1] ? 1 : 0;
        upElem = matrix[i - 1][k] ? 1 : 0;
        diagonalUpRightElem = matrix[i - 1][k + 1] ? 1 : 0;
      }

      if (matrix[i + 1]) {
        diagonalDownLeftElem = matrix[i + 1][k - 1] ? 1 : 0;
        downElem = matrix[i + 1][k] ? 1 : 0;
        diagonalDownRightElem = matrix[i + 1][k + 1] ? 1 : 0;
      }
    
      counter = beforeElem + nextElem + diagonalUpRightElem + diagonalUpLeftElem + upElem + diagonalDownRightElem + diagonalDownLeftElem + downElem;
      row.push(counter);
      
    }

    field.push(row);
  }

  return field;
}

module.exports = {
  minesweeper
};