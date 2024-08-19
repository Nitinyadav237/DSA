import Heap from "heap-js"

interface HeapNode{
    value: number;
    arrayIndex: number,
    elementIndex:number
}
function mergeKSortedArr(arrays: number[][]): number[]{
    const k = arrays.length
    const result: number[] = []

    //initialize minHeap
    const minHeap = new Heap<HeapNode>((a, b) => a.value - b.value)
    //push first ele of all arrays
    for (let i = 0; i < k; i++){
        if (arrays[i].length > 0) {
            minHeap.push({
                value: arrays[i][0],
                arrayIndex: i,
                elementIndex:0
            })
        }
    }
   
    // Extract elements from the heap and push next elements from the same array
    
    while (!minHeap.isEmpty()) {
        const minNode = minHeap.pop()!
        result.push(minNode.value)
        console.log(minNode)
        // If there are more elements in the same array, push the next element into the heap
       
        const nextIndex = minNode.elementIndex + 1
        if (nextIndex < arrays[minNode.arrayIndex].length) { //element nextindex comaparing elemnt nextindex < current array index length 0+1 =>1 [1,2,3,5]
            minHeap.push({
                value: arrays[minNode.arrayIndex][nextIndex],
                arrayIndex: minNode.arrayIndex,
                elementIndex:nextIndex
            })
        }
    }

    
    return result
}
const arrays = [
    [1, 4, 7],
    [2, 5],
    [3, 6, 9]
];
const result = mergeKSortedArr(arrays);
console.log(result); 