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
function levelOrderTraversal1(root) {
    if (!root)
        return [];
    const result = []; // [[to havve level order]] create 2darr for just value use []
    const queue = [root];
    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues = []; // this will add value in the level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelValues.push(node.val);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        result.push(levelValues); // add all the values in that level [[]]
    }
    return result;
}
function levelOrderTraversal(root) {
    if (!root)
        return [];
    const result = [];
    const queue = [root];
    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            result.push(node.val);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
    }
    return result;
}
const root = new TreeNode1(3, new TreeNode1(9), new TreeNode1(20, new TreeNode1(15), new TreeNode1(7)));
// Test the levelOrderTraversal function
const result = levelOrderTraversal(root);
console.log(result);
