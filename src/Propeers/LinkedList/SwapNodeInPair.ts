// Swap Nodes in Pairs
export class ListNode1 {
    value: number;
    next: ListNode1 | null;

    constructor(value: number, next: ListNode1 | null = null) {
        this.value = value;
        this.next = next;
    }
}
//d-> 1->2->3->4
function SwapNodesInPair(head: ListNode1 | null): ListNode1 | null{
    let dummy = new ListNode1(0)
    dummy.next = head

    let point: ListNode1 | null = dummy;
    while (point!.next !== null && point!.next.next !== null) { //min 2 need to swap
        
        let first: ListNode1 | null = point!.next;
        let second: ListNode1 | null = point!.next.next;

        //swap the nodes
        first.next = second.next;
        second.next = first;
        point!.next = second
        
        //update point to move to next node 
        point = first 
    }
    return dummy.next
}