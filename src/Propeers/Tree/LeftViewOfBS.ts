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

function leftView1(root: TreeNode1 | null): number[]{
    if (!root) return [];
    const result: number[] = []
    const queue: TreeNode1[] = [root]
    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++){
            const node = queue.shift()
            if (i === 0) {  //leftview for rightview i==levelsize-1[0,1,2]
                result.push(node!.val)
            }
            if (node!.left) queue.push(node!.left);
            if (node!.right) queue.push(node!.right);
        }
    }
    return result
}
function leftView(root: TreeNode1 | null): number[]{
    if (!root) return [];
    let result:number[]=[]
    let maxDepth = -1;
    function preorder(node: TreeNode1 | null, depth: number):void{
        if (!node) return;
        if (depth > maxDepth) {
            result.push(node.val)
            maxDepth=depth
        }
        if (node.left) preorder(node.left, depth + 1)
        if(node.right) preorder(node.right,depth+1)
        
    }
    preorder(root,0)
    return result
}
const root = new TreeNode1(1,
    new TreeNode1(2,
        new TreeNode1(4),
        new TreeNode1(5)
    ),
    new TreeNode1(3,
        null,
        new TreeNode1(6)
    )
);

// Test the leftView function
const result = leftView(root);
console.log(result);
