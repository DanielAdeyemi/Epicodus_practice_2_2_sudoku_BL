function Sudoku(array) {
  this.rows = array;
}

Sudoku.prototype.checkRow = function() {
  for (let i = 0; i < 9; i++) {
    let sum = 0;
    for (let j = 0; j < 9; j++) {
      sum += this.rows[i][j];
    }
    if (sum !== 45) {
      console.log('Error Row')
      return false
    };
    console.log("true");
  }
}

Sudoku.prototype.checkColumn = function() {
  for (let i = 0; i < 9; i++) {
    let sum = 0;
    for (let j = 0; j < 9; j++) {
      sum += this.rows[j][i];
    }
    if (sum !== 45) {
      console.log('Error Column')
      return false
    };
    console.log("true");
  }
}

let sudoku = new Sudoku([
  [4, 2, 6, 5, 7, 1, 3, 9, 8],
  [8, 5, 7, 2, 9, 3, 1, 4, 6],
  [1, 3, 9, 4, 6, 8, 2, 7, 5],
  [9, 7, 1, 3, 8, 5, 6, 2, 4],
  [5, 4, 3, 7, 2, 6, 8, 1, 9],
  [6, 8, 2, 1, 4, 9, 7, 5, 3],
  [7, 9, 4, 6, 3, 2, 5, 8, 1],
  [2, 6, 5, 8, 1, 4, 9, 3, 7],
  [3, 1, 8, 9, 5, 7, 4, 6, 2]
]);


$(document).ready(function() {
  console.log(sudoku);
  sudoku.checkRow();
  sudoku.checkColumn();
})