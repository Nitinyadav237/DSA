"use strict";
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class MySingleLinkedList {
    constructor() {
        this.head = null;
    }
    //traverse
    traverse() {
        let temp = this.head;
        while (temp !== null) { // Check if temp is not null
            console.log(temp.data);
            temp = temp.next;
        }
    }
    //inserting at the beginning
    insertAtBegin(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtEnd(data) {
        const newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
        }
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }
    deleteFromBegin() {
        if (this.head === null)
            return null;
        const data = this.head.data;
        this.head = this.head.next;
        console.log(this.head);
        return data;
    }
    deleteFromEnd() {
        if (this.head === null)
            return null; //empty condition check
        //single node
        if (this.head.next === null) {
            const data = this.head.data;
            this.head = null;
            return data;
        }
        // more than 1 one
        let temp = this.head;
        while (temp.next.next !== null) {
            temp = temp.next;
        }
        let data = temp.next.data;
        temp.next = null;
        return data;
    }
    insertAtIndex(index, data) {
        if (index < 0)
            throw new Error("Negative Index");
        if (index === 0) {
            this.insertAtBegin(data);
            return;
        }
        const newNode = new ListNode(data);
        let temp = this.head;
        let currentIndex = 0;
        while (temp !== null && currentIndex < index - 1) {
            temp = temp.next;
            currentIndex++;
        }
        if (temp !== null) {
            newNode.next = temp.next;
            temp.next = newNode;
        }
        else {
            throw new Error("Index out of bound");
        }
    }
}
const list2 = new MySingleLinkedList;
list2.insertAtBegin(2);
list2.insertAtBegin(3);
list2.insertAtEnd(4);
list2.insertAtEnd(5);
console.log(list2.insertAtIndex(2, 300), "kk");
console.log(list2.traverse());
