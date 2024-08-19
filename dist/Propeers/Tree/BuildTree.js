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
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];
function buildTree(preOrder, inOrder) {
    if (preOrder.length === 0 || inOrder.length === 0)
        return null;
    const rootVal = preOrder[0];
    const root = new TreeNode1(rootVal);
    const rootIndexInorder = inOrder.indexOf(rootVal);
    //left tree and right subtree 
    const leftInorder = inOrder.slice(0, rootIndexInorder);
    const rightInorder = inOrder.slice(rootIndexInorder + 1);
    const leftPreorder = preOrder.slice(1, 1 + leftInorder.length);
    const rightPreorder = preOrder.slice(1 + leftInorder.length);
    //recursive
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
    return root;
}
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const tree = buildTree(preorder, inorder);
console.log(tree);
