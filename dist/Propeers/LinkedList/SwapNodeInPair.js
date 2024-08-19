"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode1 = void 0;
// Swap Nodes in Pairs
class ListNode1 {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.ListNode1 = ListNode1;
//d-> 1->2->3->4
function SwapNodesInPair(head) {
    let dummy = new ListNode1(0);
    dummy.next = head;
    let point = dummy;
    while (point.next !== null && point.next.next !== null) { //min 2 need to swap
        let first = point.next;
        let second = point.next.next;
        //swap the nodes
        first.next = second.next;
        second.next = first;
        point.next = second;
        //update point to move to next node 
        point = first;
    }
    return dummy.next;
}
