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
function findPredecessorAndSuccessor(root, key) {
    let predecessor = null;
    let successor = null;
    function findPredecessor(node, key) {
        if (!node)
            return;
        if (node.val < key) {
            predecessor = node; //node=1 and key 7
            findPredecessor(node.right, key);
        }
        else {
            findPredecessor(node.left, key);
        }
    }
    function findSucessor(node, key) {
        if (!node)
            return;
        if (node.val > key) { //node=10 and key 7
            successor = node;
            findSucessor(node.left, key);
        }
        else {
            findSucessor(node.right, key);
        }
    }
    findPredecessor(root, key);
    findSucessor(root, key);
    return {
        //@ts-ignore
        predecessor: predecessor ? predecessor.val : -1, successor: successor ? successor.val : -1
    };
}
const root = new TreeNode1(15, new TreeNode1(10, new TreeNode1(8), new TreeNode1(12)), new TreeNode1(20, new TreeNode1(16), new TreeNode1(25)));
const key = 1;
const result = findPredecessorAndSuccessor(root, key);
console.log('Predecessor:', result.predecessor); // Should print 8
console.log('Successor:', result.successor);
