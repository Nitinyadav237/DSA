"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode1 = void 0;
class ListNode1 {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.ListNode1 = ListNode1;
function addTwoLinked(l1, l2) {
    let dummyHead = new ListNode1(0);
    let current = dummyHead;
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        let x = l1 ? l1.value : 0;
        let y = l2 ? l2.value : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode1(sum % 10);
        //update ptr
        current = current.next;
        if (l1 !== null)
            l1 = l1.next;
        if (l2 !== null)
            l2 = l2.next;
    }
    //handling extra carry
    if (carry > 0) {
        current.next = new ListNode1(carry);
    }
    return dummyHead.next;
}
// List 1: 2 -> 4 -> 3
let l1 = new ListNode1(2, new ListNode1(4, new ListNode1(3)));
// List 2: 5 -> 6 -> 4
let l2 = new ListNode1(5, new ListNode1(6, new ListNode1(4)));
console.log(addTwoLinked(l1, l2));
