"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode1 = void 0;
// Delete Kth Node From End
class ListNode1 {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.ListNode1 = ListNode1;
function deleteKthNodeFromEnd(head, k) {
    let dummy = new ListNode1(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    // advance fast pointer k steps
    for (let i = 0; i < k; i++) {
        if (fast === null)
            return head; //k is larger than no.of nodes
        fast = fast.next;
    }
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    if (slow.next !== null) {
        slow.next = slow.next.next;
    }
    return dummy.next;
}
