"use strict";
class QueueusingArrs {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.items = new Array(capacity).fill(null);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }
    isFull() {
        return this.size === this.capacity;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    enqueue(item) {
        if (this.isFull())
            throw new Error("Full Queue");
        this.items[this.rear] = item;
        this.rear = (this.rear + 1) % this.capacity;
        this.size += 1;
    }
    dequeue() {
        if (this.isEmpty())
            return undefined;
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.size -= 1;
        return item;
    }
}
class Nodes {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    // Add an item to the rear of the queue
    enqueue(item) {
        const newNode = new Nodes(item);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        }
        else {
            if (this.rear) {
                this.rear.next = newNode;
                this.rear = newNode;
            }
        }
        this.size += 1;
    }
    // Remove and return the item from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return undefined; // Queue is empty
        }
        const item = this.front.value;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null; // Queue is empty now
        }
        this.size -= 1;
        return item;
    }
    // Peek at the front item of the queue
    peek() {
        if (this.isEmpty()) {
            return undefined; // Queue is empty
        }
        return this.front.value;
    }
    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }
    // Get the size of the queue
    getSize() {
        return this.size;
    }
}
const q = new QueueusingArrs();
console.log(q.enqueue(12));
console.log(q.enqueue(12));
console.log(q.enqueue(12));
console.log(q.enqueue(12));
console.log(q.dequeue());
