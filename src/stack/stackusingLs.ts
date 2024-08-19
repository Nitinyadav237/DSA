class stackListNode<T>{
    data: T
    next: stackListNode<T> | null
    
    constructor(data:T) {
        this.data = data
        this.next=null
    }
}

class stackLs<T>{
    private head: stackListNode<T> | null
    private length: number
    
    constructor() {
        this.head = null
        this.length = 0
    }

    isEmpty(): boolean{
        return this.head===null
    }
    size(): number{
        return this.length
    }

    push(data: T): void{
        const newNode = new stackListNode(data)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    pop(): T | undefined{
        if (this.isEmpty()) return undefined
        const data = this.head!.data
        this.head=this.head!.next
        this.length--
        return data
    }

    peek(): T | undefined{
        if (this.isEmpty()) return undefined
        
        return this.head!.data
    }

    printStack(): void{
        if (this.isEmpty()) {
            console.log("Empty Stack") 
            return
        }
        let temp = this.head
        while (temp !== null) {
            console.log(temp.data)
            temp=temp.next
        }
    }
}

const linkedStack = new stackLs()

console.log(linkedStack.isEmpty())
console.log(linkedStack.size())
console.log(linkedStack.push(1))
console.log(linkedStack.push(11))
console.log(linkedStack.push(12))
console.log(linkedStack.push(13))
console.log(linkedStack.printStack())
console.log(linkedStack.pop())


console.log(linkedStack.size())
console.log(linkedStack.peek())

