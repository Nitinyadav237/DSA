// vertical Order Traversal

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
interface NodeInfo {
    value: number;
    level: number;
}

function verticalOrderTraversal1(root: TreeNode1 | null): number[][]{
    if (!root) return []
    const result:number[][]=[]
    const map = new Map<number, NodeInfo[]>() //hdist,node.val
    const queue: [TreeNode1, number,number][] = [[root, 0,0]]
    while (queue.length > 0) {
        const [node, hdist,level] = queue.shift()!
        if (!map.has(hdist)) {
            map.set(hdist, []);
        }
        map.get(hdist)!.push({value:node.val,level})

        if (node.left) queue.push([node.left, hdist - 1,level+1])
        if(node.right) queue.push([node.right,hdist+1,level+1])
        
    }
    //sorted the map by horizontal distance 
    const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
    for (const key of sortedKeys) {
        // Sort by level first and then by value for each vertical level
        const sortedNode = map.get(key)!.sort((a, b) => a.level !== b.level ? a.level - b.level : a.value - b.value).map(nodeInfo => nodeInfo.value);
        // console.log(map.get(key)!.sort((a, b) => a.level - b.level || a.value-b.value))
        result.push(sortedNode);
    }
    return result
}
function verticalOrderTraversal(root: TreeNode1 | null): number[]{
    if (!root) return []
    const result:number[]=[]
    const maps = new Map<number, NodeInfo[]>() //hdist,node.val
    const queue: [TreeNode1, number,number][] = [[root, 0,0]]
    while (queue.length > 0) {
        const [node, hdist,level] = queue.shift()!
        if (!maps.has(hdist)) {
            maps.set(hdist, []);
        }
        maps.get(hdist)!.push({value:node.val,level})

        if (node.left) queue.push([node.left, hdist - 1,level+1])
        if(node.right) queue.push([node.right,hdist+1,level+1])
        
    }
    //sorted the map by horizontal distance 
    const sortedKeys = Array.from(maps.keys()).sort((a, b) => a - b);
    for (const key of sortedKeys) {
        // Sort by level first and then by value for each vertical level
        // const sortedNode = map.get(key)!.sort((a, b) => a.level !== b.level ? a.level - b.level : a.value - b.value); // if we need sorting value of 1d arr use uncomment

        // console.log(map.get(key)!.sort((a, b) => a.level - b.level || a.value-b.value))

        for (const nodeInfo of maps.get(key)!) { // no need sorting of values 
            result.push(nodeInfo.value)
        }
       
    }
    return result
}
const root = new TreeNode1(1,
     new TreeNode1(3,
        new TreeNode1(5),
        new TreeNode1(7)
    ),new TreeNode1(2,
        new TreeNode1(4),
        new TreeNode1(6)
    ),
   
);

console.log(verticalOrderTraversal(root)); 