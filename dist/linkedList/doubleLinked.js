"use strict";
class DoublyListNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class MyDoublyList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertAtBegin(data) {
        const newNode = new DoublyListNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    //Head -> 10 <-> 20 <-> 30 <- Tail
    insertAtEnd(data) {
        const newNode = new DoublyListNode(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    insertAtIndex(index, data) {
        if (index < 0)
            throw new Error("Negative Index");
        if (index === 0) {
            this.insertAtBegin(data);
        }
        const newNode = new DoublyListNode(data);
        let temp = this.head;
        let currentIndex = 0;
        while (temp !== null && currentIndex < index - 1) {
            temp = temp.next;
            currentIndex++;
        }
        if (temp !== null) {
            newNode.next = temp.next;
            newNode.prev = temp;
            if (temp.next !== null) {
                temp.next.prev = newNode;
            }
            temp.next = newNode;
            if (newNode.next === null) {
                this.tail = newNode;
            }
        }
        else {
            throw new Error("Index out of bound");
        }
    }
    updateAtIndex(index, data) {
        if (index < 0)
            throw new Error("Negative Index");
        let temp = this.head;
        let currentIndex = 0;
        while (temp !== null && currentIndex < index) {
            temp = temp.next;
            currentIndex++;
        }
        if (temp !== null) {
            temp.data = data;
        }
        else {
            throw new Error("Out of bounds");
        }
    }
    printForward() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
    printBackward() {
        let temp = this.tail;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.prev;
        }
    }
    deleteFromBegin() {
        if (this.head === null)
            return null;
        const data = this.head.data;
        this.head = this.head.next;
        if (this.head !== null) {
            this.head.prev = null;
        }
        else {
            this.tail = null;
        }
        return data;
    }
    deleteFromEnd() {
        if (this.tail === null)
            return null;
        const data = this.tail.data;
        this.tail = this.tail.prev;
        if (this.tail !== null) {
            this.tail.next = null;
        }
        else {
            this.head = null;
        }
        return data;
    }
    deleteAtIndex(index) {
        if (index < 0)
            throw new Error("Negative Index");
        if (index === 0) {
            this.deleteFromBegin();
        }
        let temp = this.head;
        let currentIndex = 0;
        while (temp !== null && currentIndex < index - 1) {
            temp = temp.next;
            currentIndex++;
        }
        if (temp !== null && temp.next !== null) {
            const data = temp.next.data;
            temp.next = temp.next.next;
            if (temp.next !== null) {
                temp.next.prev = temp;
            }
            else {
                this.tail = temp;
            }
            return data;
        }
        else {
            throw new Error("Index out of bound");
        }
    }
}
const dll = new MyDoublyList();
console.log(dll.insertAtEnd(20));
console.log(dll.insertAtEnd(40));
console.log(dll.insertAtBegin(60));
console.log(dll.insertAtBegin(10));
console.log(dll.insertAtBegin(5));
// console.log(dll.deleteAtIndex(2))
console.log(dll.updateAtIndex(1, 3000));
// console.log(dll.deleteFromBegin())
// console.log(dll.deleteFromEnd())
console.log(dll.printBackward());
console.log(dll.printForward());
