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

function levelOrderTraversal1(root: TreeNode1 | null): number[][]{
    if (!root) return [];
    const result: number[][] = [] // [[to havve level order]] create 2darr for just value use []
    const queue: TreeNode1[] = [root]
    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues:number[]=[] // this will add value in the level
        for (let i = 0; i < levelSize; i++){
            const node = queue.shift()
            levelValues.push(node!.val)
            if (node!.left) queue.push(node!.left)
            if(node!.right) queue.push(node!.right)
        }  
        result.push(levelValues) // add all the values in that level [[]]
    }
    return result
}
function levelOrderTraversal(root: TreeNode1 | null): number[]{
    if (!root) return [];
    const result: number[] = [] 
    const queue: TreeNode1[] = [root]
    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++){
            const node = queue.shift()
            result.push(node!.val)
            if (node!.left) queue.push(node!.left)
            if(node!.right) queue.push(node!.right)
        }  
    }
    return result
}
const root = new TreeNode1(3,
    new TreeNode1(9),
    new TreeNode1(20,
        new TreeNode1(15),
        new TreeNode1(7)
    )
);

// Test the levelOrderTraversal function
const result = levelOrderTraversal(root);
console.log(result);