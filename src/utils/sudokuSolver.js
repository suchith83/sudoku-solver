// export function solveSudoku(board) {
//   const solutions = [];

//   function isValid(board, row, col, num) {
//     for (let i = 0; i < 9; i++) {
//       if (board[row][i] === num || board[i][col] === num) return false;
//       const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
//       const boxCol = 3 * Math.floor(col / 3) + i % 3;
//       if (board[boxRow][boxCol] === num) return false;
//     }
//     return true;
//   }

//   function backtrack(board, row = 0, col = 0) {
//     if (row === 9) {
//       solutions.push(JSON.parse(JSON.stringify(board)));
//       return;
//     }
//     const [nextRow, nextCol] = col === 8 ? [row + 1, 0] : [row, col + 1];
//     if (board[row][col] !== 0) return backtrack(board, nextRow, nextCol);
//     for (let num = 1; num <= 9; num++) {
//       if (isValid(board, row, col, num)) {
//         board[row][col] = num;
//         backtrack(board, nextRow, nextCol);
//         board[row][col] = 0;
//       }
//     }
//   }

//   backtrack(board);
//   return solutions;
// }


// sudokuSolver.js

// Check if placing num at board[row][col] is valid
export function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
    if (board[i][col] === num) return false;
    const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const boxCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[boxRow][boxCol] === num) return false;
  }
  return true;
}

// Solve sudoku and return all solutions as an array of boards
export function solveSudoku(board) {
  const solutions = [];

  function backtrack(board, row = 0, col = 0) {
    if (row === 9) {
      // Deep copy solution
      solutions.push(board.map(r => [...r]));
      return;
    }
    const [nextRow, nextCol] = col === 8 ? [row + 1, 0] : [row, col + 1];
    if (board[row][col] !== 0) {
      backtrack(board, nextRow, nextCol);
      return;
    }
    for (let num = 1; num <= 9; num++) {
      if (isValid(board, row, col, num)) {
        board[row][col] = num;
        backtrack(board, nextRow, nextCol);
        board[row][col] = 0;
      }
    }
  }

  backtrack(board);
  return solutions;
}

// Utility to create empty 9x9 grid
export function createEmptyGrid() {
  return Array(9).fill(0).map(() => Array(9).fill(0));
}
