"use strict";
// //  Intersection Of Two Sorted Arrays
// Problem statement
// You are given two arrays 'A' and 'B' of size 'N' and 'M' respectively. Both these arrays are sorted in non-decreasing order. You have to find the intersection of these two arrays.
// Intersection of two arrays is an array that consists of all the common elements occurring in both arrays.
function findArrayIntersection(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++;
        }
        else if (arr1[i] < arr2[j])
            i++;
        else
            j++;
    }
    return result;
}
const A = [1, 2, 2, 3, 4, 5, 5];
const B = [2, 2, 3, 4, 5, 5, 6, 7];
console.log(findArrayIntersection(A, B));
