"use strict";
// Given a string, find the next smallest palindrome
function nextSmallestPalindrome(s) {
    const length = s.length;
    //helper func for "9"
    const allNines = (str) => str.split("").every((c) => c === "9");
    if (allNines(s)) {
        //special case for 9
        return '1' + "0".repeat(length - 1) + "1";
    }
    //helper func to create a palin by mirroring left
    const createPalindrome = (leftHalf, middle) => {
        return leftHalf + middle + leftHalf.split("").reverse().join("");
    };
    //split input str into lefthalf and middle
    const halfLength = Math.floor(length / 2);
    const leftHalf = s.slice(0, halfLength);
    const middle = length % 2 === 0 ? "" : s[halfLength];
    let palindrome = createPalindrome(leftHalf, middle);
    if (palindrome > s) {
        return palindrome;
    }
    let incrementedHalf = (BigInt(leftHalf + middle) + BigInt(1)).toString();
    // If incrementing changes the length of the number
    if (incrementedHalf.length > leftHalf.length + middle.length) {
        // The middle becomes '1', and we need to adjust the leftHalf
        incrementedHalf = incrementedHalf.slice(1);
        return createPalindrome(incrementedHalf, '0');
    }
    // Adjust for cases where the length of incrementedHalf is less than leftHalf + middle
    const newLeftHalf = incrementedHalf.slice(0, leftHalf.length);
    const newMiddle = incrementedHalf.slice(leftHalf.length);
    return createPalindrome(newLeftHalf, newMiddle);
}
const input = "121";
console.log(nextSmallestPalindrome(input));
