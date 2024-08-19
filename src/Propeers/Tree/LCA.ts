//  LCA Of Binary Tree

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

function lowestCommonAncestor(root: TreeNode1 | null, p: TreeNode1, q: TreeNode1):TreeNode1|null {
    if (!root) return null
    
    if (root === p || root === q) return root
    
    //recursive left ,right
    const leftLCA :TreeNode1|null= lowestCommonAncestor(root.left, p, q);
    const rightLCA:TreeNode1|null = lowestCommonAncestor(root.right, p, q);

    if (leftLCA && rightLCA) return root;

    return leftLCA || rightLCA;
}
const node5 = new TreeNode1(5);
const node1 = new TreeNode1(1);
const node2 = new TreeNode1(2);
const node6 = new TreeNode1(6);
const node4 = new TreeNode1(4, node5, node1);
const node3 = new TreeNode1(3, node6, node4);
const root = new TreeNode1(0, node2, node3);

const p = node5; // Node 5
const q = node1; // Node 1

const lca = lowestCommonAncestor(root, p, q);
console.log(lca!.val)