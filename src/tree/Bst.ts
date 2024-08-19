class TreeNodeBST<T>{
    value: T;
    leftNode: TreeNodeBST<T> | null;
    rightNode: TreeNodeBST<T> | null;

    constructor(value: T) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }

}

class BinarySearchTree<T>{
    root: TreeNodeBST<T> | null;
    constructor() {
        this.root = null;
    }

    //1.create newnode check if it is null 2.yes-->assign to root no-->insertNode 3.insisde insert method check newnode value < curretn node if it true check left is null 3.1-->yes insety or else call again insertnode until (nullor empty space found)


    insert(value: T): void{
        const newNode = new TreeNodeBST<T>(value)
        if (this.root === null) {
            this.root=newNode
        } else {
            this.insertNode(this.root,newNode)
        }
    }

    private insertNode(node: TreeNodeBST<T>, newNode: TreeNodeBST<T>): void{
        if (newNode.value < node.value) {
            if (node.leftNode === null) {
                node.leftNode=newNode
            } else {
                this.insertNode(node.leftNode,newNode)
            }
        } else {
            if (node.rightNode === null) {
                node.rightNode=newNode
            } else {
                this.insertNode(node.rightNode,newNode)
            }
        }
    }
    //search operation 1.creat search node func (node,value) 1.1-->check if it null return null 2. check value<node.value return searchnodefun() 2.2 similarly for greater if it eqaul return node

    search(value: T): TreeNodeBST<T> | null{
        return this.searchNode(this.root, value);
    }
    searchNode(node: TreeNodeBST<T> | null, value: T): TreeNodeBST<T> | null{
        if (node === null) return null;
        if (value < node.value) {
            return this.searchNode(node.leftNode, value);
        } else if (value > node.value) {
            return this.searchNode(node.rightNode,value)
        } else {
            return node
        }
    }
    // delete
    delete(value: T): void{
         this.root =this.deleteNode(this.root,value)
    }
//
    private deleteNode(node: TreeNodeBST<T> | null, value: T): TreeNodeBST<T> | null{
        if (node === null) return null;
        if (value < node.value) {
            node.leftNode=this.deleteNode(node.leftNode,value)
        } else if (value > node.value) {
            node.rightNode=this.deleteNode(node.rightNode,value)
        } else {
            //node to be deleted is found
            //leaf node
            if (node.leftNode === null && node.rightNode === null) {
                return null
            }
            //1 child
            if (node.leftNode === null) {
                return node.rightNode
            } else if (node.rightNode === null) {
                return node.leftNode
            }


            //2 child to delete first copy the value to root by find inordersucessor(root-->right min value) 2.1 then delete the copied  value 
            node.value = this.minValue(node.rightNode)  //value is copied
            
            //delete the inorder 
            node.rightNode=this.deleteNode(node.rightNode,node.value)
        }
    return node
    }
    private minValue(node:TreeNodeBST<T>) {
        let min = node.value
        while (node.leftNode !== null) {
            node = node.leftNode
            min=node.value
        }
        return min
    }

    Search(value: T): TreeNodeBST<T> | null{
        return this.searchNodes(this.root,value)
    }
    
    private searchNodes(node: TreeNodeBST<T> | null, value: T): TreeNodeBST<T> | null {
        if (node === null) return null

        if (value < node.value) {
            return this.searchNode(node.leftNode, value)
        } else if (value > node.value) {
            return this.searchNode(node.rightNode, value)
        } else {
            return node
        }
    }

    update(oldValue: T, newValue: T): boolean{
        const nodeToBeUpdate = this.search(oldValue)
        if (nodeToBeUpdate !== null) {
            nodeToBeUpdate.value = newValue
            return true
        }
        return false
    }

    inOrderTraversal(): T[]{
        const result: T[] = []
        this.inOrderHelper(this.root, result)
        return result
    }
    private inOrderHelper(node: TreeNodeBST<T> | null, result:T[]):void {
        if (node === null) return ;
        this.inOrderHelper(node.leftNode, result)
        result.push(node.value)
        this.inOrderHelper(node.rightNode,result)
        
    }

}

const bst = new BinarySearchTree<number>()
console.log(bst.insert(12))
console.log(bst.update(12,32))
console.log(bst.insert(112))
console.log(bst.insert(2))
console.log(bst.insert(8))
console.log(bst.inOrderTraversal())
        
console.log(bst.delete(2))