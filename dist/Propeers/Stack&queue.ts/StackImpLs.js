"use strict";
//  Implement Stack With Linked List
class NodeLs {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
class stackLss {
    constructor() {
        this.top = null;
        this.count = 0;
    }
    push(value) {
        const newNode = new NodeLs(value);
        newNode.next = this.top;
        this.top = newNode;
        this.count += 1;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        const item = this.top.value;
        this.top = this.top.next;
        this.count -= 1;
        return item;
    }
    peek() {
        if (this.isEmpty())
            return undefined;
        return this.top.value;
    }
    isEmpty() {
        return this.top === null;
    }
    size() {
        return this.count;
    }
}
