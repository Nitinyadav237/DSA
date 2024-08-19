// https://leetcode.com/problems/non-decreasing-array/

// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
//[2,3,1,5]-->problem occur at index 2 --> either change i =i+1 or i+1=i ele to change with i=i+1 it should be greater than prev of i (i-1) 
function checkPossibility(arr: number[]):boolean {
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > arr[i + 1]) {
            count++
            if (count > 1) return false
            
            if (i === 0|| arr[i-1]<=arr[i+1]) {
                arr[i]=arr[i+1]
            }else {
                arr[i+1]=arr[i]
            }
        }
    }
    return true
}
const arr3 = [12, 3, 11, 4, 6]
console.log(checkPossibility(arr3))