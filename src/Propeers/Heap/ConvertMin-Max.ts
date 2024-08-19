
function heapify(arr: number[], n: number, root: number) {
    const left = 2 * root + 1;
    const right = 2 * root + 2;
    let largest=root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
     if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== root) {
        [arr[root], arr[largest]] = [arr[largest], arr[root]]
        heapify(arr,n,largest)
    }

}

function buildMaxHeap(arr: number[]) {
    const n = arr.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
        heapify(arr,n,i)
    }
}

function convertMin_MaxHeap(minheap: number[]): number[]{
    const arr = [ ...minheap ]
    buildMaxHeap(arr)
    return arr
}
// Example usage
const minHeap = [1, 3, 5, 7, 9, 8, 6];
const maxHeap = convertMin_MaxHeap(minHeap);

console.log('Max-Heap:', maxHeap);
