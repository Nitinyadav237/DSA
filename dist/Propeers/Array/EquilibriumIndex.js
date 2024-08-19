"use strict";
function EquilibriumIndex(arr) {
    const total_sum = arr.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let right_sum = total_sum - leftSum - arr[i];
        if (leftSum === right_sum) {
            return i;
        }
        leftSum += arr[i];
    }
    return -1;
}
const nums1 = [1, 7, 3, 6, 5, 6];
console.log(EquilibriumIndex(nums1));
