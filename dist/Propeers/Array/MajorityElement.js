"use strict";
// Majority element
function majorityElement(arr) {
    let candidate = null;
    let count = 0;
    for (const num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    // validate candidate
    count = 0;
    for (const num of arr) {
        if (num === candidate) {
            count++;
        }
    }
    return count > Math.floor(arr.length / 2) ? candidate : -1;
}
const arr14 = [3, 3, 2, 2, 2, 2, 2, 2, 4, 2, 4, 4, 2, 4, 4];
console.log(majorityElement(arr14));
