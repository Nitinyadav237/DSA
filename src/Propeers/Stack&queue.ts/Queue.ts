class QueueusingArrs<T>{
    private items: (T | null )[];
    private front: number;
    private rear: number;
    private size: number;
    private capacity: number;

    constructor(capacity: number = 10) {
        this.capacity = capacity;
        this.items = new Array(capacity).fill(null);
        this.front = 0;
        this.rear = 0;
        this.size=0
    }
    isFull(): boolean{
        return this.size===this.capacity
    }
    isEmpty(): boolean {
        return this.size === 0
    }
    getSize():number {
        return this.size
    }
    enqueue(item: T): void{
        if (this.isFull()) throw new Error("Full Queue")
        this.items[this.rear] = item
        this.rear = (this.rear + 1) % this.capacity
        this.size+=1
    }

    dequeue(): T | undefined{
        if (this.isEmpty()) return undefined

        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.size -= 1
        return item!
    }
      
}
class Nodes<T> {
    value: T;
    next: Nodes<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class Queue<T> {
    private front: Nodes<T> | null = null;
    private rear: Nodes<T> | null = null;
    private size: number = 0;

    // Add an item to the rear of the queue
    enqueue(item: T): void {
        const newNode = new Nodes(item);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            if (this.rear) {
                this.rear.next = newNode;
                this.rear = newNode;
            }
        }
        this.size += 1;
    }

    // Remove and return the item from the front of the queue
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // Queue is empty
        }
        const item = this.front!.value;
        this.front = this.front!.next;
        if (this.front === null) {
            this.rear = null; // Queue is empty now
        }
        this.size -= 1;
        return item;
    }

    // Peek at the front item of the queue
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // Queue is empty
        }
        return this.front!.value;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.size === 0;
    }

    // Get the size of the queue
    getSize(): number {
        return this.size;
    }
}

const q = new QueueusingArrs();
console.log(q.enqueue(12))
console.log(q.enqueue(12))
console.log(q.enqueue(12))
console.log(q.enqueue(12))
console.log(q.dequeue())