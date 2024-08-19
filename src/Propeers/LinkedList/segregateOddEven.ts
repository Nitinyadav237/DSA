//  Segregate Odd-Even
export class ListNode1 {
    value: number;
    next: ListNode1 | null;

    constructor(value: number, next: ListNode1 | null = null) {
        this.value = value;
        this.next = next;
    }
}
// 1->2->3->4

function segmentOddEven(head: ListNode1 | null): ListNode1 | null{
    if (head === null||head.next===null) return head;
    let odd: ListNode1 | null = head;
    let even: ListNode1 | null = head.next
    let evenHead: ListNode1 | null = even //connect with odd last

    while (even !== null && even.next !== null) {
        odd.next = odd.next!.next!;
        odd = odd!.next
        
        even.next = even.next.next
        even=even.next
    }
    odd.next = evenHead
    return head
}

function segregateOddEvenBasedData(head: ListNode1 | null) {
    if (head === null && head!.next === null) return head;

    //create dummy node for odd and even
    let oddDummy: ListNode1 = new ListNode1(0);
    let evenDummy: ListNode1 = new ListNode1(0);

    let oddTail: ListNode1 = oddDummy;
    let evenTail: ListNode1 = evenDummy;

    let current: ListNode1 | null = head;

    while (current !== null) {
        if (current.value % 2 === 1) {
            oddTail.next = current
            oddTail=oddTail.next //update odd ptr
        } else {
            evenTail.next = current;
            evenTail=evenTail.next
        }
        current=current.next
    }
    evenTail.next = null //ending even tail
    
    oddTail.next = evenDummy.next
    
    return oddDummy.next

}
let node1 = new ListNode1(6);
let node2 = new ListNode1(10);
let node3 = new ListNode1(7);
let node4 = new ListNode1(8);
let node5 = new ListNode1(5);
let node6 = new ListNode1(-1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(segregateOddEvenBasedData(node1))