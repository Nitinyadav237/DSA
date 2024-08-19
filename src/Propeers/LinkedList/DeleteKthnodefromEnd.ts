// Delete Kth Node From End
export class ListNode1 {
    value: number;
    next: ListNode1 | null;

    constructor(value: number, next: ListNode1 | null = null) {
        this.value = value;
        this.next = next;
    }
}
function deleteKthNodeFromEnd(head: ListNode1 | null,k:number): ListNode1 | null{
 
    let dummy = new ListNode1(0);
    dummy.next = head
    let fast: ListNode1 | null = dummy;
    let slow: ListNode1 | null = dummy;

    // advance fast pointer k steps
    for (let i = 0; i < k; i++){
        if (fast === null) return head; //k is larger than no.of nodes
        fast=fast.next
    }
    while (fast!.next !== null) {
        fast = fast!.next;
        slow=slow.next!
    }
    if (slow!.next !== null) {
        slow!.next=slow!.next.next
    }
    return dummy.next
}