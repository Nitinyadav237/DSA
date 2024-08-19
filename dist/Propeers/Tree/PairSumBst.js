"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode1 = void 0;
class TreeNode1 {
    constructor(val, left, right) {
        this.left = null;
        this.right = null;
        this.val = val;
        this.left = left || null;
        this.right = right || null;
    }
}
exports.TreeNode1 = TreeNode1;
function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let current = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}
function pairSumBst1(root, target) {
    const values = inorderTraversal(root);
    let left = 0;
    let right = values.length - 1;
    while (left < right) {
        const sum = values[left] + values[right];
        if (sum === target) {
            return [values[left], values[right]];
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return null;
}
function pairSumBst(root, target) {
    const seen = new Set();
    const stack = [];
    let current = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        const complement = target - current.val;
        if (seen.has(complement)) {
            return [complement, current.val];
        }
        seen.add(current.val);
        current = current.right;
    }
    return null;
}
// Example usage
const root = new TreeNode1(10, new TreeNode1(5, new TreeNode1(3), new TreeNode1(7)), new TreeNode1(15, new TreeNode1(12), new TreeNode1(18)));
const target = 22;
const pair = pairSumBst1(root, target);
const pair2 = pairSumBst(root, target);
console.log('Pair with sum', target, ':', pair);
console.log('Pair with sum', target, ':', pair2);
