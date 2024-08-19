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

function isPartialBST(root: TreeNode1 | null, min = -Infinity, max = Infinity): boolean{
    if (!root) return true
    if (root.val <= min || root.val >= max) return false
    return isPartialBST(root.left,min,root.val) && isPartialBST(root.left,root.val,max) 
}
const root = new TreeNode1(10,
    new TreeNode1(5,
        null,
        new TreeNode1(15)
    ),
    new TreeNode1(20)
);

console.log(isPartialBST(root));