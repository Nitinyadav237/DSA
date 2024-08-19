// Inorder Traversal

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


function inorderTraversalRecursive(root: TreeNode1 | null): number[]|null{
    if (!root) return null;
    const result:number[]=[]
    function inOrder(node: TreeNode1 | null): void{
        if (!node) return;
        inOrder(node.left)
        result.push(node.val)
        inOrder(node.right)
    }
    inOrder(root)
    return result
}

function inorderTraversalUsingStack(root: TreeNode1 | null): number[] | null{
    if (!root) return null
    const result: number[] = []
    const stack: TreeNode1[] = []

    let curr: TreeNode1 | null = root
    
    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr)
            curr=curr.left
        }
        curr = stack.pop()!
        result.push(curr.val)
        curr=curr.right
        
    }
    return result
}
const root = new TreeNode1(1,
     new TreeNode1(2,
        new TreeNode1(4),
        new TreeNode1(5)
    ), new TreeNode1(3,
        new TreeNode1(6),
        new TreeNode1(7)
    )
);
console.log(inorderTraversalUsingStack(root))

// console.log(inorderTraversalRecursive(root))