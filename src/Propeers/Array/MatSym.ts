// You are given a square matrix, return true if the matrix is symmetric otherwise return false.

// A symmetric matrix is that matrix whose transpose is equal to the matrix itself.

function isMatrixSymmetric(mat:number[][]):boolean {
    let n = mat.length;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if (mat[i][j] !== mat[j][i]) {
                return false
            }
        }
    }
    return true
}

const matrix1 = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];

const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(isMatrixSymmetric(matrix1)); 
console.log(isMatrixSymmetric(matrix2)); 