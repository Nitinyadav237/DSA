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
// function LCA3Nodes(root: TreeNode1 | null, n1: TreeNode1 | null, n2: TreeNode1 | null, n3: TreeNode1 | null): TreeNode1 | null{
//     if (!root) return null
//     const nodes = [n1!.val,n2!.val,n3!.val]
//     let curr: TreeNode1 | null = root
//     while (curr) {
//         if (nodes.every((nodeVal) => nodeVal < curr!.val)) {
//             curr=curr.left
//         } else if (nodes.every((nodeVal) => nodeVal > curr!.val)) {
//             curr=curr.right
//         } else {
//             return curr
//         }
//     }
//     return null
// }
function LCA3Nodes(root, N1, N2, N3) {
    // Base case
    if (!root)
        return null;
    if (root.val === N1 || root.val === N2 || root.val === N3)
        return root;
    // Recur for left and right subtrees
    const leftLCA = LCA3Nodes(root.left, N1, N2, N3);
    const rightLCA = LCA3Nodes(root.right, N1, N2, N3);
    // If both left and right calls returned non-null, root is the LCA
    if (leftLCA && rightLCA)
        return root;
    // Otherwise, return the non-null child
    return leftLCA ? leftLCA : rightLCA;
}
const root = new TreeNode1(15, new TreeNode1(2, new TreeNode1(4), new TreeNode1(5)), new TreeNode1(3, new TreeNode1(6), new TreeNode1(7)));
const N1 = 4;
const N2 = 5;
const N3 = 7;
const lca = LCA3Nodes(root, N1, N2, N3);
console.log('LCA:', lca?.val); // Output: 15
