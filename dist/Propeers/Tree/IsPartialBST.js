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
function isPartialBST(root, min = -Infinity, max = Infinity) {
    if (!root)
        return true;
    if (root.val <= min || root.val >= max)
        return false;
    return isPartialBST(root.left, min, root.val) && isPartialBST(root.left, root.val, max);
}
const root = new TreeNode1(10, new TreeNode1(5, null, new TreeNode1(15)), new TreeNode1(20));
console.log(isPartialBST(root));
