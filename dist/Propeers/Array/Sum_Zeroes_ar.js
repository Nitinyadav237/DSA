"use strict";
// You are given a binary matrix (it contains only 0s and 1s) with dimensions ‘N * M’. You need to find and return the sum of coverages of all zeros of the given matrix.
// Coverage for a particular 0 is defined as the total number of ‘1s’ around it (i.e., immediate left, immediate right, immediate up, and immediate bottom positions)
// [
//   [0, 1, 0],
//   [1, 0, 1],
//   [0, 1, 0]
// ]
function sumZeroesCoverage(mat) {
    const row = mat.length;
    const col = mat[0].length;
    let totalCoverage = 0;
    function countOnesAround(i, j) {
        let count = 0;
        //up
        if (i > 0 && mat[i - 1][j] === 1)
            count++;
        //down
        if (i < row - 1 && mat[i + 1][j] === 1)
            count++;
        //left
        if (j > 0 && mat[i][j - 1] === 1)
            count++;
        //right
        if (j < col - 1 && mat[i][j + 1] === 1)
            count++;
        return count;
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (mat[i][j] === 0) {
                totalCoverage += countOnesAround(i, j);
            }
        }
    }
    return totalCoverage;
}
const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
];
console.log(sumZeroesCoverage(matrix));
