// Description:
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!
//
// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
//
// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:
//
// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// Solution

const isSolved = (board) => {
    const rows = board;
    const columns = [[], [], []];
    const diagonals = [[], []];
    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board.length; j += 1) {
            columns[i].push(board[j][i]);
            if (i === j) {
                diagonals[0].push(board[i][j]);
            }
            if (i + j === board.length - 1) {
                diagonals[1].push(board[i][j]);
            }
        }
    }
    const allLines = rows.concat(columns).concat(diagonals);
    for (let i = 0; i < allLines.length; i += 1) {
        if (allLines[i].every((el) => el === 1)) {
            return 1;
        }
        if (allLines[i].every((el) => el === 2)) {
            return 2;
        }
    }
    if (board.some((row) => row.some((el) => el === 0))) {
        return -1;
    }
    return 0;
}



// Tests

console.log(isSolved([[0, 0, 1], [0, 1, 2], [2, 1, 0]])); // -1