"use strict";
// LCA of Two Nodes In A BST
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
function LCA_BST1(root, p, q) {
    let curr = root;
    while (curr) {
        if (curr.val < p.val && curr.val < q.val) {
            curr = curr.right;
        }
        else if (curr.val > p.val && curr.val > q.val) {
            curr = curr.left;
        }
        else {
            return curr;
        }
    }
    return null;
}
function LCA_BST(root, p, q) {
    if (!root)
        return null;
    if (root.val < p.val && root.val < q.val) {
        return LCA_BST(root.right, p, q);
    }
    if (root.val > p.val && root.val > q.val) {
        return LCA_BST(root.left, p, q);
    }
    return root;
}
const root = new TreeNode1(6, new TreeNode1(2, new TreeNode1(0), new TreeNode1(4, new TreeNode1(3), new TreeNode1(5))), new TreeNode1(8, new TreeNode1(7), new TreeNode1(9)));
const node2 = root.left; // Node with value 2
const node8 = root.right; // Node with value 8
console.log(LCA_BST(root, node2, node8));
