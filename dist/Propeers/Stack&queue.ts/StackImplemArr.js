"use strict";
//  Stack Implementation Using Array
class StackUsingArr {
    constructor(capacity = 10) {
        this.items = [];
        this.top = -1;
        this.capacity = capacity;
    }
    push(item) {
        if (this.isFull())
            throw new Error("Stack is Full");
        this.top += 1;
        this.items[this.top] = item;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        const item = this.items[this.top];
        this.top -= 1;
        return item;
    }
    peek() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.top];
    }
    isFull() {
        return this.top >= this.capacity - 1;
    }
    isEmpty() {
        return this.top === -1;
    }
    size() {
        return this.top + 1;
    }
}
