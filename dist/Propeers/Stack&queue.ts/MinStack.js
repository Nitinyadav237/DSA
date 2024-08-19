"use strict";
class Minstack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(item) {
        this.stack.push(item);
        if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(item);
        }
    }
    pop() {
        if (this.stack.length === 0)
            return undefined;
        const item = this.stack.pop();
        if (item === this.minStack[this.minStack.length - 1]) {
            console.log(item, this.minStack[this.minStack.length - 1]);
            this.minStack.pop();
        }
        return item;
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
    printStack() {
        console.log("Stack contents:");
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i]);
        }
    }
    printMiStack() {
        console.log("Stack contents:");
        for (let i = this.minStack.length - 1; i >= 0; i--) {
            console.log(this.minStack[i]);
        }
    }
}
// Example usage
const minStack = new Minstack();
minStack.push(3);
minStack.push(5);
minStack.push(-15);
minStack.push(25);
minStack.push(-111);
console.log(minStack.printMiStack());
console.log(minStack.printStack());
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.pop());
console.log(minStack.pop());
console.log(minStack.getMin()); // Should print 1
minStack.pop();
console.log(minStack.getMin()); // Should print 2
minStack.pop();
console.log(minStack.getMin());
