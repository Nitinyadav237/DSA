// //  Move All Negative Numbers To Beginning And Positive To End


// [1, 2, -3, 4, -4, -5]
function MoveNegativeBegin(arr: number[]): number[] {
    let left = 0; //iterate 
    let right = 0; //position where neg will be placed
    while (left < arr.length) {
        if (arr[left] < 0) {
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            // [arr[left],arr[right]]=[arr[right],arr[left]]
            right++
        }
        left++
    }
    return arr
}

const arr7 = [1, 2, -3, 4, -4, -5];

console.log(MoveNegativeBegin(arr7))