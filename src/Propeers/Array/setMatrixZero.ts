// Set Matrix Zeros
// [[1,1,1],
// [1, 0, 1],
//     [1, 1, 1]]

function setMatrixZero(mat: number[][]):number[][] {
    //set mark as zero 
    let firstRow: boolean = false;
    let firstCol: boolean = false;
    let rowLength = mat.length
    let colLength=mat[0].length
    for (let i = 0; i <rowLength; i++){
        for (let j = 0; j < colLength; j++){
            if (mat[i][j] === 0) {
                if (i === 0) firstRow = true;
                if (j === 0) firstCol = true;
                mat[0][j] = 0
                mat[i][0] = 0;
            }
        }
    }

    //replacr inn mat
    for (let i = 1; i < rowLength; i++){
        for (let j = 1; j < colLength; j++){
            if (mat[i][0] === 0 || mat[0][j] === 0) {
                mat[i][j]=0
            }
        }
    }
    if (firstRow) {
        for (let j = 0; j < colLength; j++){
            mat[0][j] = 0;
        }
    }
    if (firstCol) {
        for (let i = 0; i <rowLength; i++){
            mat[i][0] = 0;
        }
    }
    return mat
}
const matrix11 = [
    [5, 0, 7, 8],
];

setMatrixZero(matrix11);
console.log(matrix11);