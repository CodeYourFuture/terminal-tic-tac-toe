/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
        |  X  |     |     
        =================
        |     |  X  |     
        =================
        |  O  |  O  |  X  
        =================

        
        _X_
        00X
    Test your function by calling it with an example tic-tac-toe board.
*/
 let board = [
   ["X", "_", "_"],
   ["_", "X", "_"],
   ["O", "O", "X"],
 ];

export function printBoard(board) {
    let greeting = " ";
   for (let array of board){
    for (let value of array) {
       // console.log(value)
        if( value ==="X"){
          greeting=greeting +"| x "

        }
        if (value==="_"){
           greeting = greeting + "|   ";
        }
        if (value==="0"){
            greeting = greeting + "| 0 ";
        }
    
    }
      greeting = greeting + "\n"+ "============="+"\n"
   }
return greeting
}

console.log(printBoard(board))

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
}
