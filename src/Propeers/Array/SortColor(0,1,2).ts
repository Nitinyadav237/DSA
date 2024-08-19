// Sort 0 1 2

function sort012(arr:number[]):number[] {
    let low = 0 //0
    let high = arr.length - 1
    let mid = 0 //1 --iterate

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++
            mid++
        } else if (arr[mid] === 1) {
            mid++
        } else {
            if (arr[mid] === 2) {
                [arr[mid], arr[high]] = [arr[high], arr[mid]]
                high--
            }
        }
    }
    return arr
}
const arr13 = [2, 0, 1, 1, 0, 2, 1, 0];
console.log(sort012(arr13));
