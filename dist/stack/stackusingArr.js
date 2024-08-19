"use strict";
class StackArr {
    constructor() {
        this.data = [];
        this.top = -1;
    }
    isEmpty() {
        return this.top === -1;
    }
    size() {
        return this.top + 1;
    }
    push(data) {
        this.data[++this.top] = data;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        return this.data[this.top--];
    }
    peek() {
        if (this.isEmpty())
            return undefined;
        return this.data[this.top];
    }
    printStack() {
        if (this.isEmpty()) {
            console.log("Empty stack");
            return;
        }
        for (let i = 0; i <= this.top; i++) {
            console.log(this.data[i]);
        }
    }
    updateAtIndex(index, data) {
        if (index < 0 || index > this.top)
            throw new Error("Out of bound");
        this.data[index] = data;
    }
}
const stackarr = new StackArr();
console.log(stackarr.isEmpty());
console.log(stackarr.push(20));
console.log(stackarr.push(20));
console.log(stackarr.push(20));
console.log(stackarr.push(20));
console.log(stackarr.updateAtIndex(1, 200));
console.log(stackarr.peek());
console.log(stackarr.isEmpty());
console.log(stackarr.isEmpty());
console.log(stackarr.printStack());
