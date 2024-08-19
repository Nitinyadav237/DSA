class TreeNode<T>{
    value: T;
    leftNode: TreeNode<T> | null;
    rightNode: TreeNode<T> | null;

    constructor(data: T) {
        this.value = data;
        this.leftNode = null;
        this.rightNode = null;
    }
}

class BinaryTreeArr<T>{
    private tree: (T | null)[]

    constructor() {
        this.tree=[]
    }

    //insert value in the binary tree
    insert(value: T): void{
        this.tree.push(value)
    }

    // get value of node at givenindex
    getNodeValue(index: number): T | null{
        if (index < this.tree.length) {
            return this.tree[index]
        }
        return null
    }

    
    deleteNode(value: T):void {
        const index = this.tree.indexOf(value)
        if (index === -1) return;

        //replace the node to be deleted with last node
        const lastIndex = this.tree.length - 1
        if (index !== lastIndex) {
            this.tree[index]=this.tree[lastIndex]
        }
        this.tree.pop()
    }

    updateAtIndex(index: number, value: T): void{
        if (index < this.tree.length) {
            this.tree[index] = value;
        } else {
            console.error("Index out of bounds")
        }
    }

    //traversal inorder:left root right

    inorderTraversal(): T[]{
        const result: T[] = []
        this.inorderHelper(0,result)
        return result
    }
    private inorderHelper(index: number, result: T[]): void{
        if (index>=this.tree.length || this.tree[index]===null) {
            return
        }
        const leftIndex = (2*index)+1;
        const rightIndex = (2*index)+2;
        this.inorderHelper(leftIndex, result)
        result.push(this.tree[index])
        this.inorderHelper(rightIndex,result)
    }


    //root left right
    preorderTraversal(): T[]{
        const result: T[] = []
        this.preorderHelper(0,result)
        return result
    }

    private preorderHelper(index: number, result: T[]): void{
        if (index >= this.tree.length || this.tree[index] === null) {
            return
        }
        const leftIndex = (2*index)+1;
        const rightIndex = (2*index)+2;
        result.push(this.tree[index])
        this.preorderHelper(leftIndex, result)
        this.preorderHelper(rightIndex,result)
    }

    postorderTraversal(): T[]{
        const result: T[] = []
        this.postorderHelper(0,result)
        return result
    }
    private postorderHelper(index: number, result: T[]): void{
        if (index >= this.tree.length || this.tree[index] === null) {
            return
        }
        const leftIndex = (2*index)+1;
        const rightIndex = (2*index)+2;
        this.postorderHelper(leftIndex, result)
        this.postorderHelper(rightIndex, result)
        result.push(this.tree[index])
    }


    // level order traversal
    
    leveloderTraversal(): T[]{
        const result: T[] = []

        for (let i = 0; i < this.tree.length; i++) {
            if (this.tree[i] !== null) {
                result.push(this.tree[i]!)
            }
        }
        return result;
    }

      //    10
    //      /  \
    //    20    30
    //   / \    / 
    //  40  50 60
    
    heightofTree(): number{
        return this.heightHelper(0)
    }

    heightofNode(index: number): number | null{
        if (index >= this.tree.length || this.tree[index] === null) {
            return null
        }
        return this.heightHelper(index)
    }
    private heightHelper(index:number):number {
        if (index >= this.tree.length || this.tree[index] === null) {
            return 0
        }
        const leftIndex = (2 * index) + 1;
        const rightIndex = (2 * index) + 2;
        const leftHeight = this.heightHelper(leftIndex);
        const rightHeight = this.heightHelper(rightIndex);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    depthofTree(): number | null{
        if(this.tree.length===0||this.tree[0]===null) return null
        return this.depthHelper(0)
    }

    depthofNode(index: number): number|null{
        if (index >= this.tree.length || this.tree[index] === null) {
            return  null
        }
        return this.depthHelper(index)
    }
    depthHelper(index: number): number{
        let depth = 0
        while (index > 0) {
            index = Math.floor((index - 1) / 2)
            depth
        }
        return depth
    }

}


  

const binTreeArr = new BinaryTreeArr<number>()
console.log(binTreeArr.insert(10))
console.log(binTreeArr.insert(20))
console.log(binTreeArr.insert(30))
console.log(binTreeArr.insert(40))

console.log(binTreeArr.deleteNode(50))
console.log(binTreeArr.heightofTree())
console.log("Inorder Traversal:", binTreeArr.inorderTraversal()); // [4, 2, 5, 1, 3]
console.log("Preorder Traversal:", binTreeArr.preorderTraversal()); // [1, 2, 4, 5, 3]
console.log("Postorder Traversal:", binTreeArr.postorderTraversal());
console.log("Depth of node at index 2:", binTreeArr.depthofNode(4));

binTreeArr.updateAtIndex(2, 35);
console.log("Level Order Traversal after update:", binTreeArr.leveloderTraversal()); // [10, 20, 35, 40, 50]

binTreeArr.deleteNode(20);
console.log("Level Order Traversal after deletion:", binTreeArr.leveloderTraversal()); // [10, 50, 35, 40]