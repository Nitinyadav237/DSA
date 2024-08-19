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
function insertionSortLinked(head) {
    let dummy = new ListNode1(0);
    let current = head;
    while (current !== null) {
        let next = current.next;
        let prev = dummy;
        //find postion to insert curr node
        while (prev.next !== null && prev.next.value < current.value) {
            prev = prev?.next;
        }
        //insert current node in sorted pos
        //0=> 4 -> 2 -> 1 -> 3
        current.next = prev.next; //4->null 2.next->prev.next=>2->4
        prev.next = current; //prev->4 
        //update curr to move next node 
        current = next; //2
    }
    return dummy.next;
}
let head = new ListNode1(4, new ListNode1(2, new ListNode1(1, new ListNode1(3))));
// Call the insertion sort function
console.log(insertionSortLinked(head));
