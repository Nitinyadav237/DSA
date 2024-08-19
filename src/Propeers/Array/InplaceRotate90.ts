//  Inplace rotate matrix 90 degree

// [   [1, 2, 3],  [[7,4,1]]
//     [4, 5, 6],   [8,5,2],
//     [7, 8, 9]    [9,6,3]]
// ]

function InplaceRotate90(mat: number[][]): void{
    //tranpsose
    let n=mat.length
    for (let i = 0; i < n; i++){
        for (let j = i; j < n; j++){
            [mat[i][j],mat[j][i]]=[mat[j][i],mat[i][j]]
        }
    }
    function reverseRow(row:number[]): void {
        let left = 0;
        let right = row.length - 1;
        while (left < right) {
            [row[left], row[right]] = [row[right], row[left]]
            left++
            right--
        }
    }
    function reverseCol(mat:number[][],colIndex:number): void {
        let top = 0;
        let bottom = mat.length - 1;
        while (top < bottom) {
            [mat[top][colIndex], mat[bottom][colIndex]] = [mat[bottom][colIndex], mat[top][colIndex]]
            top++
            bottom--
        }
    }

  
    //reverse each row
    for (let i = 0; i < n; i++) {
        // mat[i].reverse()
        // reverseRow(mat[i])
        reverseCol(mat,i)
    }
    
}
const matrix12 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Matrix:");
console.log(matrix12);

InplaceRotate90(matrix12);

console.log("Rotated Matrix:");
console.log(matrix12);