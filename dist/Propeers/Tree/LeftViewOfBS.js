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
function leftView1(root) {
    if (!root)
        return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (i === 0) { //leftview for rightview i==levelsize-1[0,1,2]
                result.push(node.val);
            }
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
    }
    return result;
}
function leftView(root) {
    if (!root)
        return [];
    let result = [];
    let maxDepth = -1;
    function preorder(node, depth) {
        if (!node)
            return;
        if (depth > maxDepth) {
            result.push(node.val);
            maxDepth = depth;
        }
        if (node.left)
            preorder(node.left, depth + 1);
        if (node.right)
            preorder(node.right, depth + 1);
    }
    preorder(root, 0);
    return result;
}
const root = new TreeNode1(1, new TreeNode1(2, new TreeNode1(4), new TreeNode1(5)), new TreeNode1(3, null, new TreeNode1(6)));
// Test the leftView function
const result = leftView(root);
console.log(result);
