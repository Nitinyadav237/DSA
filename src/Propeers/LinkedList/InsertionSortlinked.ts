export class ListNode1 {
    value: number;
    next: ListNode1 | null;

    constructor(value: number, next: ListNode1 | null = null) {
        this.value = value;
        this.next = next;
    }
}

function insertionSortLinked(head: ListNode1 | null): ListNode1 | null{
    let dummy: ListNode1 = new ListNode1(0);
    let current: ListNode1 | null = head;
    
    while (current !== null) {
        let next: ListNode1 | null = current.next;
        let prev: ListNode1 | null = dummy;

        //find postion to insert curr node
        while (prev.next !== null && prev.next.value < current.value) {
            prev = prev?.next;
        }
        //insert current node in sorted pos
//0=> 4 -> 2 -> 1 -> 3
        current.next = prev.next //4->null 2.next->prev.next=>2->4
        prev.next = current  //prev->4 

        //update curr to move next node 
        current = next //2
    }
    return dummy.next
}

let head: ListNode1 | null = new ListNode1(4, new ListNode1(2, new ListNode1(1, new ListNode1(3))));

// Call the insertion sort function
console.log(insertionSortLinked(head))
