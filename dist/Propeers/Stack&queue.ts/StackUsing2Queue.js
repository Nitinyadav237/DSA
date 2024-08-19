"use strict";
class queueForstack {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (this.isEmpty())
            return undefined;
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
}
class Stackusing2Queue {
    constructor() {
        this.queue1 = new queueForstack();
        this.queue2 = new queueForstack();
    }
    push(item) {
        this.queue2.enqueue(item);
        while (!this.queue1.isEmpty()) {
            this.queue2.enqueue(this.queue1.dequeue());
        }
        //swap queueu to make q1 asn primary
        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }
    pop() {
        return this.queue1.dequeue();
    }
    peek() {
        return this.queue1.peek();
    }
    isEmpty() {
        return this.queue1.isEmpty();
    }
}
const stack = new Stackusing2Queue();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack.peek()); // Should print 40
console.log(stack.pop()); // Should print 40
console.log(stack.peek()); // Should print 30
console.log(stack.isEmpty());
