"use strict";
function solveNQueen(boardSize) {
    const result = [];
    const board = Array.from({ length: boardSize }, () => Array(boardSize).fill('.'));
    function isSafe(row, col) {
        //check column,upper left/right diagonal
        for (let i = 0; i < row; i++) {
            if (board[i][col] === "Q")
                return false;
        }
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === "Q")
                return false;
        }
        for (let i = row, j = col; i >= 0 && j < boardSize; i--, j++) {
            if (board[i][j] === "Q")
                return false;
        }
        return true;
    }
    function solve(row) {
        if (row === boardSize) {
            result.push(board.map(row => row.join("")));
            return;
        }
        for (let col = 0; col < boardSize; col++) {
            if (isSafe(row, col)) {
                board[row][col] = "Q";
                solve(row + 1);
                board[row][col] = "."; //backtrack
            }
        }
    }
    solve(0);
    return result;
}
const n = 4;
const solutions = solveNQueen(n);
console.log(solutions);
