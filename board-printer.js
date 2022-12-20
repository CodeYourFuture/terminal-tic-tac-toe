/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/

let board = [
  ["X", "0", "X"],
  ["X", "0", "X"],
  ["0", "X", "0"],
];
console.log(board);

// we change 'X' into '_'  in the first row and second column place (index [0][1] in array)
board[0][1] = "_";
// we change 'X' into '_'  in the first row and third column place (index [0][2] in array)
board[0][2] = "_";
// we change 'X' into '_'  in the second row and first column place (index [1][0] in array)
board[1][0] = "_";
// we change '0' into 'X'  in the second row and second column place (index [1][1] in array)
board[1][1] = "X";
// we change 'X' into '_'  in the second row and third column place (index [1][2] in array)
board[1][2] = "_";
// we change 'X' into '0'  in the third row and second column place (index [2][1] in array)
board[2][1] = "0";
// we change '0' into 'X'  in the third row and third column place (index [2][2] in array)
board[2][2] = "X";

console.log(board);

export function printBoard(board) {}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {}
