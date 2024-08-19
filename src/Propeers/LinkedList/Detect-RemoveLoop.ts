// Detect and Remove Loop
export class ListNode1 {
    value: number;
    next: ListNode1 | null;

    constructor(value: number, next: ListNode1 | null = null) {
        this.value = value;
        this.next = next;
    }
}
function detectRemoveLoop(head: ListNode1 | null): ListNode1 | null{
    if (head === null && head!.next === null) {
        return head
    }

    let slow: ListNode1 | null = head;
    let fast: ListNode1 | null = head;

    //phase detect loop
    while (fast !== null && fast.next !== null) {
        slow = slow!.next
        fast = fast!.next.next //2step
        if (slow === fast) break;
    }
    if (fast === null || fast!.next === null) {
        return head
    }
    //phase 2 find where loop start by reseting slow 
    slow = head;
    while (slow !== fast) {
        slow = slow!.next
        fast = fast!.next
    }

    let loopStart = slow; //starting point of loop is found
    while (fast!.next !== loopStart) {  //move fast until it is found where loop start
        fast=fast!.next
    }
    fast!.next = null
    return head
}
let node3 = new ListNode1(3);
let node2 = new ListNode1(2, node3);
let node1 = new ListNode1(1, node2);
node3.next = node2; // Creates a loop
console.log(detectRemoveLoop(node1))