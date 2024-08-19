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
function zigzagTraversal1(root) {
    if (!root)
        return [];
    const result = [];
    const queue = [root];
    let leftToRight = true;
    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues = [];
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (leftToRight) {
                levelValues.push(node.val);
            }
            else {
                levelValues.unshift(node.val);
            }
            if (node?.left)
                queue.push(node.left);
            if (node?.right)
                queue.push(node.right);
        }
        leftToRight = !leftToRight;
        result.push(levelValues);
    }
    return result;
}
function zigzagTraversal(root) {
    if (!root)
        return [];
    const result = [];
    const queue = [root];
    let leftToRight = true;
    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (leftToRight) {
                result.push(node.val);
            }
            else {
                result.unshift(node.val);
            }
            if (node?.left)
                queue.push(node.left);
            if (node?.right)
                queue.push(node.right);
        }
        leftToRight = !leftToRight;
    }
    return result;
}
const root = new TreeNode1(3, new TreeNode1(9), new TreeNode1(20, new TreeNode1(15), new TreeNode1(7)));
// Test the zigzagLevelOrder function
const result = zigzagTraversal(root);
console.log(result);
