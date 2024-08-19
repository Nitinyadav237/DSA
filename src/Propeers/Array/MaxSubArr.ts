//  Maximum Subarray Sum

function maxSubArr(arr: number[]): number{
    let maxSum = 0;
    let currentSum = 0 ;
    for (let i = 1; i < arr.length; i++){
        currentSum += arr[i]
        maxSum = Math.max(currentSum, maxSum)
        if (currentSum < 0) {
            currentSum = 0
        };
    }
    return maxSum
}
const arr6 = [-7, -8, -16, -16,-10];
console.log(maxSubArr(arr6))