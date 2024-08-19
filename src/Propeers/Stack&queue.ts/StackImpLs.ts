//  Implement Stack With Linked List

class NodeLs<T>{
    value: T;
    next: NodeLs<T> | null = null;
    constructor(value: T) {
        this.value=value
    }
}

class stackLss<T>{
    private top: NodeLs<T> | null = null;
    private count: number = 0
    
    push(value: T): void{
        const newNode = new NodeLs(value)
        newNode.next = this.top;
        this.top = newNode;
        this.count += 1;
    }
    pop(): T | undefined{
        if (this.isEmpty()) return undefined
        const item = this.top!.value
        this.top = this.top!.next
        this.count -= 1
        return item
    }
    peek(): T | undefined {
        if (this.isEmpty()) return undefined
        return this.top!.value
    }
    isEmpty(): boolean{
        return this.top === null;
    }
    size(): number{
        return this.count
    }
}
