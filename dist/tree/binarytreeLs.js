"use strict";
class TreeNodeLS {
    constructor(value) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }
}
class binaryTreeLs {
    constructor() {
        this.root = null;
    }
    insert(value) {
        //1.create node 2.check if root ===null (tree is empty) 
        // 3.if not null(tree not empty) insert value using levelorder(queue) 3.1-->add root in queue then until queue is not empty first delete element from first then check its left if it is null add or push same with right
        const newNode = new TreeNodeLS(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            if (node.leftNode === null) {
                node.leftNode = newNode;
                return;
            }
            else {
                queue.push(node.leftNode);
            }
            if (node.rightNode === null) {
                node.rightNode = newNode;
                return;
            }
            else {
                queue.push(node.rightNode);
            }
        }
        //levelorder we using quueeu 1.two array one for result and for queue check if root !==NULL add root to the queue 2.while(queue.length>0) shift() and it to result then chck whether rootleft null or not
    }
    levelOrderTraversal() {
        const result = [];
        const queue = [];
        if (this.root !== null) {
            queue.push(this.root);
        }
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);
            if (node.leftNode !== null) {
                queue.push(node.leftNode);
            }
            if (node.rightNode !== null) {
                queue.push(node.rightNode);
            }
        }
        return result;
    }
    inOrderTraversal() {
        const result = [];
        this.inorderHelper(this.root, result);
        return result;
    }
    inorderHelper(node, result) {
        if (node === null)
            return;
        this.inorderHelper(node.leftNode, result);
        result.push(node.value);
        this.inorderHelper(node.rightNode, result);
    }
    preOrderTraversal() {
        const result = [];
        this.preOrderHelper(this.root, result);
        return result;
    }
    //root left right
    preOrderHelper(node, result) {
        if (node === null)
            return;
        result.push(node.value);
        this.preOrderHelper(node.leftNode, result);
        this.preOrderHelper(node.rightNode, result);
    }
    postOrderTraversal() {
        const result = [];
        this.postOrderHelper(this.root, result);
        return result;
    }
    //left right root
    postOrderHelper(node, result) {
        if (node === null)
            return;
        this.postOrderHelper(node.leftNode, result);
        this.postOrderHelper(node.rightNode, result);
        result.push(node.value);
    }
}
const binTreeLs = new binaryTreeLs();
console.log(binTreeLs.insert(12));
console.log(binTreeLs.insert(22));
console.log(binTreeLs.insert(32));
console.log(binTreeLs.insert(142));
console.log(binTreeLs.insert(152));
console.log(binTreeLs.insert(62));
// console.log(binTreeLs.heightOfNode(12))
console.log(binTreeLs.preOrderTraversal());
console.log(binTreeLs.postOrderTraversal());
console.log(binTreeLs.inOrderTraversal());
console.log(binTreeLs.levelOrderTraversal());
