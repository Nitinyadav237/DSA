export class TreeNode1{
    val: number;
    left: TreeNode1 | null = null;
    right: TreeNode1 | null = null;
    constructor(val: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
        this.val = val
        this.left = left || null;
        this.right = right || null;
    }
}
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];
function buildTree(preOrder: number[], inOrder: number[]): TreeNode1 | null{
    if (preOrder.length === 0 || inOrder.length === 0) return null;
    const rootVal = preOrder[0]
    const root = new TreeNode1(rootVal)
    const rootIndexInorder = inOrder.indexOf(rootVal)
 //left tree and right subtree 
    const leftInorder = inOrder.slice(0, rootIndexInorder);
    const rightInorder = inOrder.slice(rootIndexInorder + 1)
    
    const leftPreorder = preOrder.slice(1, 1 + leftInorder.length);
    const rightPreorder = preOrder.slice(1 + leftInorder.length)
    
    //recursive
    root.left = buildTree(leftPreorder, leftInorder)
    root.right=buildTree(rightPreorder,rightInorder)
    

    return root
}
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

const tree = buildTree(preorder, inorder);
console.log(tree);