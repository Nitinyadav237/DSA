export class TreeNode1 {
    val: number;
    left: TreeNode1 | null = null;
    right: TreeNode1 | null = null;
    constructor(val: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
        this.val = val;
        this.left = left || null;
        this.right = right || null;
    }
}


function KthSmallestBstIterative1(root: TreeNode1 | null,k:number): number | null{
    const stack: TreeNode1[] = []
    let curr: TreeNode1 | null = root;
    let count = 0;

    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr)
            curr=curr.left
        }
        curr = stack.pop()!
        count++
           console.log(`Visited node: ${curr.val}, count: ${count}`);
        if (count === k) return curr.val
        curr=curr.right
    }
    return null
}
function KthLargestBstIterative1(root: TreeNode1 | null,k:number): number | null{
    const stack: TreeNode1[] = []
    let curr: TreeNode1 | null = root;
    let count = 0;

    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr)
            curr=curr.right
        }
        curr = stack.pop()!
        count++
        if (count === k) return curr.val
        curr=curr.left
    }
    return null
}

function KthSmallestBstRecursive(root: TreeNode1 | null,k:number): number | null{
    let count = 0
    let result: number | null = null

    function inOrderTraversal(node: TreeNode1 | null): void{
        if (!node) return;
        inOrderTraversal(node.left)
        count++
        if (count === k) {
            result = node.val
            return;
        }
        inOrderTraversal(node.right)
    }

    inOrderTraversal(root)
    return result
}
function KthLargestBstRecursive(root: TreeNode1 | null,k:number): number | null{
    let count = 0
    let result: number | null = null

    function inOrderTraversal(node: TreeNode1 | null): void{
        if (!node) return;
        inOrderTraversal(node.right)
        count++
        if (count === k) {
            result = node.val
            return;
        }
        inOrderTraversal(node.left)
    }

    inOrderTraversal(root)
    return result
} 

        //  5
        // / \
        //3   7
        //2(4l),6   
        
const root = new TreeNode1(5,
    new TreeNode1(3,
        new TreeNode1(2,
            null,
            new TreeNode1(4)
        ),
        new TreeNode1(6)
    ),
    new TreeNode1(7)
);


console.log(KthSmallestBstRecursive(root, 3));
console.log(KthSmallestBstIterative1(root, 3));
console.log(KthLargestBstIterative1(root, 3));
console.log(KthLargestBstRecursive(root, 3));
