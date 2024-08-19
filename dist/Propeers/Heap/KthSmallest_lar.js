"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const heap_js_1 = __importDefault(require("heap-js"));
function findKthSmallestAndLargest(arr, k) {
    if (k <= 0 || k > arr.length) {
        return null; // k is out of bounds
    }
    // Find Kth Smallest
    const minHeap = new heap_js_1.default(heap_js_1.default.minComparatorNumber);
    for (const num of arr) {
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop(); // Remove the largest element in the heap
        }
    }
    // Find Kth Largest
    const maxHeap = new heap_js_1.default(heap_js_1.default.maxComparatorNumber); // Max-Heap for largest elements
    for (const num of arr) {
        maxHeap.push(num);
        if (maxHeap.size() > k) {
            maxHeap.pop(); // Remove the smallest element in the heap
        }
    }
    const kthSmallest = maxHeap.peek();
    const kthLargest = minHeap.peek();
    return [kthSmallest, kthLargest];
}
// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
const result = findKthSmallestAndLargest(array, k);
console.log(result);
