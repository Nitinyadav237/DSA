"use strict";
//  Queue Using Two Stacks
class QueueTwoStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
    size() {
        return this.stack1.length + this.stack2.length;
    }
    enqueue(item) {
        this.stack1.push(item);
    }
    dequeue() {
        if (this.isEmpty())
            return undefined;
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    peek() {
        if (this.isEmpty())
            return undefined;
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
    printQueue() {
        const elements = [...this.stack2].reverse().concat(this.stack1);
        console.log(elements);
    }
}
const q2 = new QueueTwoStack();
console.log(q2.enqueue(10));
console.log(q2.enqueue(20));
console.log(q2.enqueue(30));
console.log(q2.enqueue(40));
console.log(q2.peek());
console.log(q2.dequeue());
console.log(q2.peek());
console.log(q2.printQueue());
