"use strict";
// import Heap from "heap-js"
Object.defineProperty(exports, "__esModule", { value: true });
// function addNum(num: number, maxHeap: Heap<number>, minHeap: Heap<number>): void {
//     if (maxHeap.size() === 0 || num <= maxHeap.peek()!) {
//         maxHeap.push(num)
//     } else {
//         minHeap.push(num)
//     }
//     //balance heap
//     if (maxHeap.size() > minHeap.size() + 1) {
//         minHeap.push(maxHeap.pop()!)
//     } else if (minHeap.size() > maxHeap.size()) {
//         maxHeap.push(minHeap.pop()!)
//     }
// }
// function findMedian(maxHeap: Heap<number>, minHeap: Heap<number>): number{
//     if (maxHeap.size() > minHeap.size()) { //odd case
//         return maxHeap.peek()!
//     } else {
//         return ((maxHeap.peek()! + minHeap.peek()!)/2)
//     }
// }
// function runningMedian(nums: number[]): number[]{
//     const maxHeap = new Heap<number>((a,b)=>b-a)  // Max-Heap for the lower half
//     const minHeap = new Heap<number>((a,b)=>a-b);  // Min-Heap for the upper half
//     const median: number[] = []
//     nums.forEach((num) => {
//         addNum(num, maxHeap, minHeap);
//         median.push(findMedian(maxHeap,minHeap))
//     })
//     return median
// }
// const numbers = [1, 5, 2, 7, 3];
// const medians = runningMedian(numbers);
// console.log(medians); // Output: [1, 3, 2, 3.5, 3]
const priority_queue_1 = require("@datastructures-js/priority-queue");
class MedianFinder {
    constructor() {
        // Initialize maxHeap (using default comparator to simulate max-heap)
        this.maxHeap = new priority_queue_1.MaxPriorityQueue();
        // Initialize minHeap (using default comparator for min-heap)
        this.minHeap = new priority_queue_1.MinPriorityQueue();
    }
    addNum(num) {
        // Add to the appropriate heap
        if (this.maxHeap.size() === 0 || num <= this.maxHeap.front()) {
            this.maxHeap.enqueue(num);
            console.log(this.maxHeap.enqueue(num));
        }
        else {
            this.minHeap.enqueue(num);
        }
        // Balance the heaps
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
        else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.enqueue(this.minHeap.dequeue());
        }
    }
    findMedian() {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front();
        }
        else {
            return (this.maxHeap.front() + this.minHeap.front()) / 2;
        }
    }
}
// Example usage:
const obj = new MedianFinder();
obj.addNum(1);
console.log(obj.findMedian()); // Output: 1
obj.addNum(2);
console.log(obj.findMedian()); // Output: 1.5
obj.addNum(3);
console.log(obj.findMedian()); // Output: 2
