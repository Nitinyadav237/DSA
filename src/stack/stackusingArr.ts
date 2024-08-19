class StackArr<T>{
    private data: T[]
    private top: number
    
    constructor() {
        this.data = []
        this.top=-1
    }

    isEmpty(): boolean{
        return this.top ===-1
    }
    size(): number{
        return this.top + 1
    }

    push(data: T): void{
        this.data[++this.top]=data
    }
    pop(): T | undefined{
        if (this.isEmpty()) return undefined
        return this.data[this.top--]
    }
    peek(): T | undefined {
        if (this.isEmpty()) return undefined
        return this.data[this.top]
    }
    printStack(): void{
        if (this.isEmpty()) {
            console.log("Empty stack")
            return
        }
        for (let i = 0; i <= this.top; i++){
            console.log(this.data[i])
        }
    }
    updateAtIndex(index: number, data: T) :void{
        if (index < 0 || index > this.top) throw new Error("Out of bound")
        this.data[index]=data
    }
}

const stackarr = new StackArr<number>()
console.log(stackarr.isEmpty())
console.log(stackarr.push(20))
console.log(stackarr.push(20))
console.log(stackarr.push(20))
console.log(stackarr.push(20))
console.log(stackarr.updateAtIndex(1,200))

console.log(stackarr.peek())
console.log(stackarr.isEmpty())
console.log(stackarr.isEmpty())
console.log(stackarr.printStack())
