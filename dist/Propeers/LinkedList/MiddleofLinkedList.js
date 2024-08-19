"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode1 = void 0;
// import { ListNode1 } from "./ReverseLinked";
class ListNode1 {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.ListNode1 = ListNode1;
function findMiddle(head) {
    if (head === null)
        return null;
    let slow = head;
    let fast = head;
    // let prev: ListNode1 | null = null;
    while (fast !== null && fast.next !== null) {
        // prev=slow
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow; //slow-->2nd of middle if u want 1st add prev and return it
}
const listEven = new ListNode1(1, new ListNode1(2, new ListNode1(3, new ListNode1(4))));
// Create a linked list: 1 -> 2 -> 3 -> 4
// Find middle
const middleEven = findMiddle(listEven);
console.log(middleEven?.value);
