"use strict";
class TreeNodeAVL {
    constructor(value) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
        this.height = 1;
    }
}
class AVL {
    constructor() {
        this.root = null;
    }
    //height 
    height(node) {
        return node ? node.height : 0;
    }
    //balance
    getBalance(node) {
        return node ? this.height(node.leftNode) - this.height(node.rightNode) : 0;
    }
    //     y
    //    / \
    //   x   T3
    //  / \
    // T1  T2
    rightRotation(y) {
        //initial value
        const x = y.leftNode;
        const T2 = x.rightNode;
        //after rotation
        x.rightNode = y;
        y.leftNode = T2;
        //recalculate height
        x.height = Math.max(this.height(x.leftNode), this.height(x.rightNode)) + 1;
        y.height = Math.max(this.height(y.leftNode), this.height(y.rightNode)) + 1;
        return x;
    }
    //        x
    //       / \
    //       T1  Y
    //          / \
    //         T2 T3
    leftRotation(x) {
        const y = x.rightNode;
        const T2 = y.leftNode;
        //perform rotation
        y.leftNode = x;
        x.rightNode = T2;
        //updating height
        x.height = Math.max(this.height(x.leftNode), this.height(y.rightNode)) + 1;
        y.height = Math.max(this.height(y.leftNode), this.height(y.rightNode)) + 1;
        return y;
    }
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }
    //check if node is null return new node else compare and check left right 2.if it equal becoz (duplicate not allowed)
    // 3.ger node height and balance check ll rr lr rl
    insertNode(node, value) {
        if (node === null) {
            return new TreeNodeAVL(value);
        }
        if (value < node.value) {
            node.leftNode = this.insertNode(node.leftNode, value);
        }
        else if (value > node.value) {
            node.rightNode = this.insertNode(node.rightNode, value);
        }
        else
            return node;
        //node height
        node.height = Math.max(this.height(node.leftNode), this.height(node.rightNode)) + 1;
        //balance
        const balance = this.getBalance(node);
        //if this node -->unbalance then there are 4 cases
        // // 1.ll case 30,20,10 -->30 node
        //                         /
        //                         20 node.leftNode
        //                        /
        //                      10 value(insert value -->imbalance tree)
        if (balance > 1 && value < node.leftNode.value) {
            return this.rightRotation(node);
        }
        //2.RR case
        if (balance < -1 && value > node.rightNode.value) {
            return this.leftRotation(node);
        }
        // //3.Lr case 30,10,20 -->  30
        //                          /
        //                         10
        //                          \
        //                          20
        // // first left rotation   30           20
        //                          /           /  \
        //                         20          10   3
        //                         /
        //                       10
        if (balance > 1 && value > node.leftNode.value) {
            node.leftNode = this.leftRotation(node.leftNode);
            return this.rightRotation(node);
        }
        //4.rl case
        if (balance < -1 && value < node.rightNode.value) {
            node.rightNode = this.rightRotation(node.rightNode);
            return this.leftRotation(node);
        }
        return node;
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    minValue(node) {
        let min = node.value;
        while (node.leftNode !== null) {
            node = node.leftNode;
            min = node.value;
        }
        return min;
    }
    deleteNode(node, value) {
        if (node === null)
            return null;
        if (value < node.value) {
            node.leftNode = this.deleteNode(node.leftNode, value);
        }
        else if (value > node.value) {
            node.rightNode = this.deleteNode(node.rightNode, value);
        }
        else {
            //node found to be deleted
            // 1.case if both left and rigt is null
            if (node.leftNode === null && node.rightNode === null) {
                return null;
            }
            else if (node.leftNode === null) {
                return node.rightNode;
            }
            else if (node.rightNode === null) {
                return node.leftNode;
            }
            node.value = this.minValue(node.rightNode); //inorder successor
            node.rightNode = this.deleteNode(node.rightNode, value);
        }
        node.height = 1 + Math.max(this.height(node.leftNode), this.height(node.rightNode));
        const balance = this.getBalance(node);
        // Left left case
        if (balance > 1 && this.getBalance(node.leftNode) >= 0) {
            return this.rightRotation(node);
        }
        //left right case
        if (balance > 1 && this.getBalance(node.leftNode) < 0) {
            node.leftNode = this.leftRotation(node.leftNode);
            return this.rightRotation(node);
        }
        //right right case
        if (balance < -1 && this.getBalance(node.rightNode) <= 0) {
            return this.leftRotation(node);
        }
        //right left case
        if (balance < -1 && this.getBalance(node.rightNode) > 0) {
            node.rightNode = this.rightRotation(node.rightNode);
            return this.leftRotation(node);
        }
        return node;
    }
    inorderTraversalAVL() {
        const result = [];
        this.inorderHelper(this.root, result);
        return result;
    }
    inorderHelper(node, result) {
        if (node !== null) {
            this.inorderHelper(node.leftNode, result);
            result.push(node.value);
            this.inorderHelper(node.rightNode, result);
        }
    }
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(node, value) {
        if (node === null)
            return null;
        if (value < node.value)
            return this.searchNode(node.leftNode, value);
        else if (value > node.value)
            return this.searchNode(node.rightNode, value);
        else
            return node;
    }
    update(oldValue, newValue) {
        const nodeToBeUpdate = this.search(oldValue);
        if (nodeToBeUpdate !== null) {
            this.delete(oldValue);
            this.insert(newValue);
            return true;
        }
        return false;
    }
}
const Avl = new AVL();
console.log(Avl.insert(10));
console.log(Avl.insert(20));
console.log(Avl.delete(30));
console.log(Avl.search(10));
console.log(Avl.update(10, 100));
console.log(Avl.inorderTraversalAVL());
