import Heap from "heap-js";

function findKthSmallestAndLargest(arr: number[], k: number): [ kthSmallest: number, kthLargest: number ] | null {
    if (k <= 0 || k > arr.length) {
        return null; // k is out of bounds
    }

    // Find Kth Smallest
    const minHeap = new Heap<number>(Heap.minComparatorNumber);
    for (const num of arr) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop(); // Remove the largest element in the heap
        }
    }

    // Find Kth Largest
    const maxHeap = new Heap<number>(Heap.maxComparatorNumber); // Max-Heap for largest elements
    for (const num of arr) {
        maxHeap.push(num);
        if (maxHeap.size() > k) {
            maxHeap.pop(); // Remove the smallest element in the heap
        }
    }
    const kthSmallest = maxHeap.peek()!;

    const kthLargest = minHeap.peek()!;

    return [ kthSmallest, kthLargest ];
}

// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
const result = findKthSmallestAndLargest(array, k);
console.log(result);
