"use strict";
// Search In Rotated Sorted Array if found return index
function SearchRotatedArray(arr, key) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === key)
            return mid;
        //determine which side is sorted
        // [4,5,1,2,3]
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
        }
        else if (arr[left] <= arr[mid]) {
            //left side sorted
            if (arr[left] <= key && key < arr[mid]) {
                right = mid - 1; //searh left side
            }
            else {
                left = mid + 1;
            }
        }
        else {
            // 4<5 5<=5
            if (arr[mid] < key && key <= arr[right]) {
                left = mid + 1; //right side
            }
            else {
                right = mid - 1;
            }
        }
    }
    return -1; //not found
}
const rotatedArray = [4];
console.log(SearchRotatedArray(rotatedArray, 4));
