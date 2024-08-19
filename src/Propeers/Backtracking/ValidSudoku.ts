

function isValidSudoku(board: string[][]): boolean{
    const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set())
    const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
    const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            const num = board[i][j]
            if (num === ".") continue;
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3) ;
            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) return false;

            rows[i].add(num)
            cols[j].add(num)
            boxes[boxIndex].add(num)
        }
    }
    return true
}
const board: string[][] =[ [".","8","7","6","5","4","3","2","1"],["2",".",".",".",".",".",".",".","."],["3",".",".",".",".",".",".",".","."],["4",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".",".","."],["6",".",".",".",".",".",".",".","."],["7",".",".",".",".",".",".",".","."],["8",".",".",".",".",".",".",".","."],["9",".",".",".",".",".",".",".","."]];

console.log(isValidSudoku(board));

function isValid(board: number[][], row: number, col: number, num: number):boolean {
    for (let i = 0; i < 9; i++){
        if(board[row][i]===num) return false
    }
     for (let i = 0; i < 9; i++){
        if(board[i][col]===num) return false
    }
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++){
        for (let j = startCol; j < startCol + 3; j++){
            if (board[i][j] === num) return false
        }
    }
return true
}
function solveSoduku(board: number[][]): boolean{
    for (let row = 0; row < 9; row++){
        for (let col = 0; col < 9; col++){
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++){
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num
                        if (solveSoduku(board)) return true;
                        board[row][col]=0
                    }
                }
                return false
            }
        }
    }
    return true
} 
const matrix111: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 0, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

if (solveSoduku(matrix111)) {
    console.log('Solved Sudoku:');
    console.log(matrix);
} else {
    console.log('No solution exists.');
}