// import { ListNode1 } from "./ReverseLinked";
export class ListNode1 {
    value: number;
    next: ListNode1 | null;

    constructor(value: number, next: ListNode1 | null = null) {
        this.value = value;
        this.next = next;
    }
}
function findMiddle(head: ListNode1 | null): ListNode1 | null{
    if (head === null) return null;
    let slow: ListNode1 | null = head;
    let fast: ListNode1 | null = head;
    // let prev: ListNode1 | null = null;
    while (fast !== null && fast.next !== null) {
        // prev=slow
        slow = slow!.next;
        fast=fast.next.next
    }
   return slow //slow-->2nd of middle if u want 1st add prev and return it
}
const listEven = new ListNode1(1, new ListNode1(2, new ListNode1(3, new ListNode1(4))));
// Create a linked list: 1 -> 2 -> 3 -> 4
// Find middle
const middleEven = findMiddle(listEven);
console.log(middleEven?.value); 