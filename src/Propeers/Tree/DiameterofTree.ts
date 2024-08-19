class TreeNode1{
    val: number;
    left: TreeNode1 | null = null;
    right: TreeNode1 | null = null;
    constructor(val: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
        this.val = val
        this.left = left || null;
        this.right = right || null;
    }
}


function diameterOfBinaryTree(root: TreeNode1 | null): number{
    let diameter = 0
    function dfs(node:TreeNode1 | null):number{
        if (node === null) return 0;
        const left = dfs(node.left)
        const right = dfs(node.right)
        diameter = Math.max(left + right, diameter)
        return 1+Math.max(left,right)
    }
    
    dfs(root)
    return diameter
}

const node4 = new TreeNode1(4);
const node5 = new TreeNode1(5);
const node2 = new TreeNode1(2, node4, node5);
const node3 = new TreeNode1(3);
const root = new TreeNode1(1, node2, node3);

console.log(diameterOfBinaryTree(root)); 