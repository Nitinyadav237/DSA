"use strict";
class MinHeaps {
    constructor() {
        this.heap = [];
    }
    //parent index of node
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    //child index -->left
    leftChildIndex(index) {
        return (2 * index) + 1;
    }
    rightChildIndex(index) {
        return (2 * index) + 2;
    }
    //swap
    swap(index1, index2) {
        // [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
        //temp method
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
    //heapifyDown
    heapifyDown(index) {
        const left = this.leftChildIndex(index);
        const right = this.rightChildIndex(index);
        let smallest = index;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }
    //heapifyUp
    heapifyUp(index) {
        while (index > 0 && this.heap[this.parentIndex(index)] > this.heap[index]) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }
    //insert value
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }
    //peek
    peek() {
        return this.heap[0];
    }
    //extractMin
    extractMin() {
        if (this.heap.length === 0)
            return undefined;
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }
}
const minhp = new MinHeaps();
console.log(minhp.insert(10));
console.log(minhp.insert(30));
console.log(minhp.insert(0));
console.log(minhp.insert(70));
console.log(minhp.insert(3));
console.log(minhp.peek());
console.log(minhp.extractMin());
console.log(minhp.peek());
