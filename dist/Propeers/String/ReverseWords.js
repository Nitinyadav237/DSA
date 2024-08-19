"use strict";
// Reverse String Word Wise
function reverseWords(str) {
    return str.trim().split(/\s+/).reverse().join(" ");
}
const inputString = "a good   example";
console.log(reverseWords(inputString));
