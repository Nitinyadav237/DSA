// naukri.com/code360/problems/rotate-array_1230543?utm_source=youtube&utm_medium=affiliate&utm_campaign=parikh_youtube

function reverseArr(arr: number[], start:number,end:number) {
    while (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--

    }
}
//rotatelEft -->rev left ,rev right ,rev whole -->considering whole as root it is postorder
//rotateright-->revwhole,revleft,revright-->preoder

function rotateLeft(arr:number[],k:number) :number[]{
    let n = arr.length
    if (n === 0 || k == 0) return arr
    k = k % n;//avoid overflow

    reverseArr(arr, 0, k-1)
    reverseArr(arr, k, n - 1)
    reverseArr(arr,0,n-1)
    return arr
}

const arr2 = [7, 5, 2, 11, 2, 43, 1, 1];
const k1 = 2;
console.log(rotateLeft(arr2, k1).join(' '));