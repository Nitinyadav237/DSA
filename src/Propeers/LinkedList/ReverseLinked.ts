// 1->2->3->4->null
//    prev(null)<--1<--2
export class ListNode1 {
    value: number;
    next: ListNode1 | null;

    constructor(value: number, next: ListNode1 | null = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseLinkedList(head: ListNode1 | null): ListNode1 | null{
    let prev: ListNode1 | null = null
    let curr: ListNode1 | null = null
    while (head !== null) {
        let temp:ListNode1 | null  = head.next
        head.next = prev
        prev = head
        head=temp
    }
    return prev
}
// 1 -> 2 -> 3 -> 4 -> null

function reverseLinkedListRec(head: ListNode1 | null): ListNode1 | null{
    if (head === null || head.next === null) {
        return head
    }
    let newHead: ListNode1 | null = reverseLinkedListRec(head.next) //newhead=4
    head.next.next = head; //for 4 to do nothign next head=3.next=4-->next=head(3) 
    
    head.next = null //4->3-null
    return newHead
}

const list1 = new ListNode1(1, new ListNode1(2, new ListNode1(3, new ListNode1(4))));
const reversedList1 = reverseLinkedListRec(list1);
console.log(reversedList1);