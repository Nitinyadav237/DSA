"use strict";
class MyQueue {
    constructor() {
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }
    isEmpty() {
        return this.front === this.rear;
    }
    size() {
        return this.rear - this.front;
    }
    enqueue(data) {
        this.data[this.rear] = data;
        this.rear++;
    }
    dequeue() {
        if (this.isEmpty())
            return undefined;
        const data = this.data[this.front];
        this.front++;
        return data;
    }
    printQueue() {
        for (let i = this.front; i < this.rear; i++) {
            console.log(this.data[i]);
        }
    }
}
const queue = new MyQueue();
console.log(queue.isEmpty());
console.log(queue.enqueue(12));
console.log(queue.enqueue(13));
console.log(queue.enqueue(14));
console.log(queue.enqueue(15));
console.log(queue.dequeue());
console.log(queue.printQueue());
