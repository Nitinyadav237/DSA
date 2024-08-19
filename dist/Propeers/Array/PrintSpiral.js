"use strict";
//  Print Spiral
function printSpiral(matrix) {
    const result = [];
    if (matrix.length === 0)
        return result;
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        //print left to right
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]); //[0][left=0,1,2]
        }
        top++;
        //print right top to  bottom(right side)
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        //print right to left
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            bottom--;
        }
        //print bottom to top left side 
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
}
const matrix123 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(printSpiral(matrix123));
