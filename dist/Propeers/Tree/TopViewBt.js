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
function topView(root) {
    if (!root)
        return [];
    const result = [];
    const map = new Map();
    const queue = [{ node: root, hd: 0 }];
    while (queue.length > 0) {
        const { node, hd } = queue.shift();
        if (!map.has(hd)) {
            map.set(hd, node.val);
        }
        if (node.left) {
            queue.push({ node: node.left, hd: hd - 1 });
        }
        if (node.right) {
            queue.push({ node: node.right, hd: hd + 1 });
        }
    }
    for (const [hd] of [...map.entries()].sort((a, b) => a[0] - b[0])) { //  covert map to array based on hd sort in ascedning order and psuh the value at that index
        result.push(map.get(hd));
    }
    return result;
}
//      1
// /  \
// 2   3
//4,5  6
const root = new TreeNode1(1, new TreeNode1(2, new TreeNode1(4), new TreeNode1(5)), new TreeNode1(3, null, new TreeNode1(6)));
// Test the topView function
const result = topView(root);
console.log(result);
