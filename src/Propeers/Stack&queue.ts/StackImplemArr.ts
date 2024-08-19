//  Stack Implementation Using Array

class StackUsingArr<T>{
    private items: T[]
    private top: number;
    private capacity: number;

    constructor(capacity: number=10) {
        this.items = []
        this.top = -1;
        this.capacity=capacity
    }
    
    push(item: T): void{
        if(this.isFull()) throw new Error("Stack is Full")
        this.top += 1;
        this.items[this.top] = item;
    }
    pop(): T | undefined{
        if (this.isEmpty()) return undefined;
        const item = this.items[this.top];
        this.top -= 1;
        return item
    }
    peek(): T | undefined{
        if (this.isEmpty()) return undefined;
        return this.items[this.top]
    }
    isFull(): boolean{
        return this.top >= this.capacity - 1;
    }
    isEmpty(): boolean{
        return this.top === -1;
    }
    size(): number{
        return this.top + 1;
    }
}