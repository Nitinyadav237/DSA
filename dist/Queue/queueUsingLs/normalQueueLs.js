"use strict";
class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class MyQueueLs {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    isEmpty() {
        return this.front === null;
    }
    enqueue(data) {
        const newNode = new QueueNode(data);
        if (this.rear === null) {
            this.rear = newNode;
            this.front = newNode;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }
    dequeue() {
        if (this.isEmpty())
            return null;
        const data = this.front.data;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        return data;
    }
    printQueue() {
        let temp = this.front;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
const queueLs = new MyQueueLs();
console.log(queueLs.isEmpty());
console.log(queueLs.enqueue(12));
console.log(queueLs.enqueue(22));
console.log(queueLs.enqueue(32));
console.log(queueLs.enqueue(42));
// console.log(queueLs.dequeue())
console.log(queueLs.dequeue());
console.log(queueLs.printQueue());
console.log(queueLs.isEmpty());
// console.log(queueLs.isEmpty())
// console.log(queueLs.isEmpty())
