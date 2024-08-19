"use strict";
// Pair Sum
// Problem statement
// You are given an array/list ‘ARR’ consisting of ‘N’ distinct integers arranged in ascending order. You are also given an integer ‘TARGET’. Your task is to count all the distinct pairs in ‘ARR’ such that their sum is equal to ‘TARGET’.
function countPairSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let count = 0;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            count++;
            left++;
            right--;
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return count > 0 ? count : -1;
}
const arr5 = [1, 2, 3, 4, 5, 6];
const target = 7;
console.log(countPairSum(arr5, target));
