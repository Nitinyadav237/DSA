class TreeNodeLS<T>{
    value: T;
    leftNode: TreeNodeLS<T> | null;
    rightNode: TreeNodeLS<T> | null;
    constructor(value: T) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
    }
}

class binaryTreeLs<T>{
    private root: TreeNodeLS<T> | null;
    constructor() {
        this.root=null
    }

    insert(value: T): void {
        //1.create node 2.check if root ===null (tree is empty) 
        // 3.if not null(tree not empty) insert value using levelorder(queue) 3.1-->add root in queue then until queue is not empty first delete element from first then check its left if it is null add or push same with right
        
        const newNode = new TreeNodeLS(value)
        if (this.root === null) {
            this.root = newNode
            return;
        }

        const queue: TreeNodeLS<T>[] = [this.root]
        while (queue.length > 0) {
            const node = queue.shift()
            if (node!.leftNode === null) {
                node!.leftNode = newNode;
                return;
            } else {
                queue.push(node!.leftNode)
            }

            if (node!.rightNode === null) {
                node!.rightNode = newNode
                return
            }
            else {
                queue.push(node!.rightNode)
            }
        }

        //levelorder we using quueeu 1.two array one for result and for queue check if root !==NULL add root to the queue 2.while(queue.length>0) shift() and it to result then chck whether rootleft null or not
   }
    levelOrderTraversal(): T[]{
        const result: T[] = []
        const queue: TreeNodeLS<T>[] = [];
        if (this.root !== null) {
            queue.push(this.root)
        }
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node!.value)
            if (node!.leftNode !== null) {
                queue.push(node!.leftNode)
            }
            if (node!.rightNode !== null) {
                queue.push(node!.rightNode)
            }
        }
            return result
    }

    inOrderTraversal(): T[]{
        const result: T[] = []
        this.inorderHelper(this.root,result)
        return result
    }
    private inorderHelper(node: TreeNode<T>|null, result: T[]): void{
        if (node === null) return
        
        this.inorderHelper(node.leftNode!, result)
        result.push(node.value)
        this.inorderHelper(node.rightNode!,result)
    }

    preOrderTraversal(): T[]{
        const result: T[] = []
        this.preOrderHelper(this.root,result)
        return result
    }
    //root left right
    private preOrderHelper(node: TreeNodeLS<T> | null, result: T[]) {
        if (node === null) return;
        result.push(node.value)
        this.preOrderHelper(node.leftNode, result)
        this.preOrderHelper(node.rightNode,result)
    }

    postOrderTraversal(): T[]{
        const result: T[] = []
        this.postOrderHelper(this.root,result)
        return result
    }
//left right root
    private postOrderHelper(node: TreeNodeLS<T> | null, result: T[]) {
        if (node === null) return;
        this.postOrderHelper(node.leftNode, result)
        this.postOrderHelper(node.rightNode, result)
        result.push(node.value)
    }

    // heightOfTree(): number | null{
    //     if (this.root === null) return null;
    //    return this.heightHelper(this.root)
    // }

    // heightOfNode(node: TreeNodeLS<T> | null): number | null {
    //     if (node === null) return null;
    //     console.log(node)
    //     return this.heightHelper(node)
        
    // }
    // private heightHelper(node: TreeNodeLS<T> | null): number{
    //     if (node === null) return 0;
    //     const leftHeight = this.heightHelper(node.leftNode)
    //     const rightHeight = this.heightHelper(node.rightNode)
    //     return Math.max(leftHeight,rightHeight)+1
    // }


    }

const binTreeLs = new binaryTreeLs<number>()

console.log(binTreeLs.insert(12))
console.log(binTreeLs.insert(22))
console.log(binTreeLs.insert(32))
console.log(binTreeLs.insert(142))
console.log(binTreeLs.insert(152))
console.log(binTreeLs.insert(62))
// console.log(binTreeLs.heightOfNode(12))

console.log(binTreeLs.preOrderTraversal())
console.log(binTreeLs.postOrderTraversal())
console.log(binTreeLs.inOrderTraversal())
console.log(binTreeLs.levelOrderTraversal ())
