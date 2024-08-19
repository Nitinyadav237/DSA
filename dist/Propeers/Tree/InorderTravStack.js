"use strict";
// Inorder Traversal
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
function inorderTraversalRecursive(root) {
    if (!root)
        return null;
    const result = [];
    function inOrder(node) {
        if (!node)
            return;
        inOrder(node.left);
        result.push(node.val);
        inOrder(node.right);
    }
    inOrder(root);
    return result;
}
function inorderTraversalUsingStack(root) {
    if (!root)
        return null;
    const result = [];
    const stack = [];
    let curr = root;
    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
}
const root = new TreeNode1(1, new TreeNode1(2, new TreeNode1(4), new TreeNode1(5)), new TreeNode1(3, new TreeNode1(6), new TreeNode1(7)));
console.log(inorderTraversalUsingStack(root));
// console.log(inorderTraversalRecursive(root))
