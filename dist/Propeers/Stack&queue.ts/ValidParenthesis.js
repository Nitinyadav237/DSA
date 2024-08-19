"use strict";
//Valid Parentheses
function isValidParentheses(s) {
    const stack = [];
    const matchingParen = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (const char of s) {
        if (char in matchingParen) {
            if (stack.length === 0 || stack[stack.length - 1] != matchingParen[char]) {
                return false;
            }
            stack.pop();
        }
        else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(isValidParentheses("()")); // Output: true
console.log(isValidParentheses("()[]{}")); // Output: true
console.log(isValidParentheses("(]")); // Output: false
console.log(isValidParentheses("([)]")); // Output: false
console.log(isValidParentheses("{[]}")); // Output: true
