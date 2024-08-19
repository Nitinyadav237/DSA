"use strict";
//  LCA Of Binary Tree
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
function lowestCommonAncestor(root, p, q) {
    if (!root)
        return null;
    if (root === p || root === q)
        return root;
    //recursive left ,right
    const leftLCA = lowestCommonAncestor(root.left, p, q);
    const rightLCA = lowestCommonAncestor(root.right, p, q);
    if (leftLCA && rightLCA)
        return root;
    return leftLCA || rightLCA;
}
const node5 = new TreeNode1(5);
const node1 = new TreeNode1(1);
const node2 = new TreeNode1(2);
const node6 = new TreeNode1(6);
const node4 = new TreeNode1(4, node5, node1);
const node3 = new TreeNode1(3, node6, node4);
const root = new TreeNode1(0, node2, node3);
const p = node5; // Node 5
const q = node1; // Node 1
const lca = lowestCommonAncestor(root, p, q);
console.log(lca.val);
