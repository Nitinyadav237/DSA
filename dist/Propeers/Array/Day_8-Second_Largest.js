"use strict";
// https://www.naukri.com/code360/problems/second-largest-element-in-the-array_873375?utm_source=youtube&utm_medium=affiliate&utm_campaign=parikh_youtube
function findSecondLargest(arr) {
    if (arr.length < 2)
        return -1;
    let largest = arr[0];
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }
        else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }
    return secondLargest === -Infinity ? -1 : secondLargest;
}
const arr1 = [2, 2, -1, 2];
console.log(findSecondLargest(arr1));
