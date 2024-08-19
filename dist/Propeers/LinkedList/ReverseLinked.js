"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode1 = void 0;
// 1->2->3->4->null
//    prev(null)<--1<--2
class ListNode1 {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.ListNode1 = ListNode1;
function reverseLinkedList(head) {
    let prev = null;
    let curr = null;
    while (head !== null) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}
// 1 -> 2 -> 3 -> 4 -> null
function reverseLinkedListRec(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let newHead = reverseLinkedListRec(head.next); //newhead=4
    head.next.next = head; //for 4 to do nothign next head=3.next=4-->next=head(3) 
    head.next = null; //4->3-null
    return newHead;
}
const list1 = new ListNode1(1, new ListNode1(2, new ListNode1(3, new ListNode1(4))));
const reversedList1 = reverseLinkedListRec(list1);
console.log(reversedList1);
