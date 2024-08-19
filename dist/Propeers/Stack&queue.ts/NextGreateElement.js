"use strict";
//  Next Greater Element
[4, 5, 2, 10];
function nextGreaterElement(arr) {
    const result = new Array(arr.length).fill(-1);
    const stack = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }
    return result;
}
const nums12 = [4, 5, 2, 10];
console.log(nextGreaterElement(nums12));
//  [4, 1, 2];
// const nums2 = [1, 3, 4, 2];
