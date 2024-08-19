"use strict";
class TreeNodeBST {
    constructor(value) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    //1.create newnode check if it is null 2.yes-->assign to root no-->insertNode 3.insisde insert method check newnode value < curretn node if it true check left is null 3.1-->yes insety or else call again insertnode until (nullor empty space found)
    insert(value) {
        const newNode = new TreeNodeBST(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.leftNode === null) {
                node.leftNode = newNode;
            }
            else {
                this.insertNode(node.leftNode, newNode);
            }
        }
        else {
            if (node.rightNode === null) {
                node.rightNode = newNode;
            }
            else {
                this.insertNode(node.rightNode, newNode);
            }
        }
    }
    //search operation 1.creat search node func (node,value) 1.1-->check if it null return null 2. check value<node.value return searchnodefun() 2.2 similarly for greater if it eqaul return node
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(node, value) {
        if (node === null)
            return null;
        if (value < node.value) {
            return this.searchNode(node.leftNode, value);
        }
        else if (value > node.value) {
            return this.searchNode(node.rightNode, value);
        }
        else {
            return node;
        }
    }
    // delete
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    //
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
            //node to be deleted is found
            //leaf node
            if (node.leftNode === null && node.rightNode === null) {
                return null;
            }
            //1 child
            if (node.leftNode === null) {
                return node.rightNode;
            }
            else if (node.rightNode === null) {
                return node.leftNode;
            }
            //2 child to delete first copy the value to root by find inordersucessor(root-->right min value) 2.1 then delete the copied  value 
            node.value = this.minValue(node.rightNode); //value is copied
            //delete the inorder 
            node.rightNode = this.deleteNode(node.rightNode, node.value);
        }
        return node;
    }
    minValue(node) {
        let min = node.value;
        while (node.leftNode !== null) {
            node = node.leftNode;
            min = node.value;
        }
        return min;
    }
    Search(value) {
        return this.searchNodes(this.root, value);
    }
    searchNodes(node, value) {
        if (node === null)
            return null;
        if (value < node.value) {
            return this.searchNode(node.leftNode, value);
        }
        else if (value > node.value) {
            return this.searchNode(node.rightNode, value);
        }
        else {
            return node;
        }
    }
    update(oldValue, newValue) {
        const nodeToBeUpdate = this.search(oldValue);
        if (nodeToBeUpdate !== null) {
            nodeToBeUpdate.value = newValue;
            return true;
        }
        return false;
    }
    inOrderTraversal() {
        const result = [];
        this.inOrderHelper(this.root, result);
        return result;
    }
    inOrderHelper(node, result) {
        if (node === null)
            return;
        this.inOrderHelper(node.leftNode, result);
        result.push(node.value);
        this.inOrderHelper(node.rightNode, result);
    }
}
const bst = new BinarySearchTree();
console.log(bst.insert(12));
console.log(bst.update(12, 32));
console.log(bst.insert(112));
console.log(bst.insert(2));
console.log(bst.insert(8));
console.log(bst.inOrderTraversal());
console.log(bst.delete(2));
