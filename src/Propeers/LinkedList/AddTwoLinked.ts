export class ListNode1 {
    value: number;
    next: ListNode1 | null;

    constructor(value: number, next: ListNode1 | null = null) {
        this.value = value;
        this.next = next;
    }
}

function addTwoLinked(l1: ListNode1|null,l2:ListNode1|null):ListNode1|null{
    let dummyHead :ListNode1= new ListNode1(0);
    let current :ListNode1= dummyHead;
    let carry = 0
    
    while (l1 !== null || l2 !== null) {
        let x: number = l1 ? l1.value : 0;
        let y: number = l2 ? l2.value : 0;
        let sum: number = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode1(sum % 10);
        //update ptr
        current = current.next
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    //handling extra carry
    if (carry > 0) {
        current.next=new ListNode1(carry)
    }
    return dummyHead.next
}
        
// List 1: 2 -> 4 -> 3
let l1: ListNode1 = new ListNode1(2, new ListNode1(4, new ListNode1(3)));

// List 2: 5 -> 6 -> 4
let l2: ListNode1 = new ListNode1(5, new ListNode1(6, new ListNode1(4)));
console.log(addTwoLinked(l1,l2))