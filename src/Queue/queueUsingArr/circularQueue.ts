class MyCircularQueue<T> {
    private data: T[]
    private front: number
    private rear: number
    private size: number
    private capacity: number

    constructor(capacity: number) {
        this.capacity = capacity
        this.data = new Array(capacity)
        this.front = 0
        this.rear = -1
        this.size = 0
    }

    isEmpty():boolean {
        return this.size===0
    }
    getSize(): number{
        return this.size
    }
    isFull(): boolean{
        return this.size===this.capacity
    }

    enqueue(data: T): void{
        if(this.isFull()) throw new Error("Queue is fulled")
        this.rear = (this.rear + 1) % this.capacity;
        this.data[this.rear] = data
        this.size++
    }

    dequeue(): T | undefined{
        if (this.isEmpty()) return undefined
        const data = this.data[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--
        return data
    }

    printQueue(): void{
        if (this.isEmpty()) {
            console.log("Empty Queue")
            return 
        }
        let index = this.front
        
        for (let i = 0; i < this.size; i++){
            console.log(this.data[index])
            index=(index+1)%this.capacity
        }
        
    }

}


const circularque = new MyCircularQueue<number>(5)
console.log(circularque.isEmpty())
console.log(circularque.isFull())
console.log(circularque.getSize())
console.log(circularque.enqueue(12))
console.log(circularque.enqueue(13))
console.log(circularque.enqueue(14))
console.log(circularque.enqueue(15))
console.log(circularque.dequeue())
console.log(circularque.printQueue())


