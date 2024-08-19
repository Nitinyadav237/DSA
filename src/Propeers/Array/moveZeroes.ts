// Move Zeroes To End

function moveZeroesEnd(arr: number[]): number[]{
    let left = 0
    for (let right = 0; right < arr.length; right++){
        if (arr[right] !== 0) {
            [arr[left],arr[right]]=[arr[right],arr[left]]
            left++
        }
    }
    return arr
}
const arr8 = [0, 1, 0, 3, 12];
console.log(moveZeroesEnd(arr8))