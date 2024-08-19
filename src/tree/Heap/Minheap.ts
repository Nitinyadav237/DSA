class MinHeaps{
    private heap: number[]
    constructor() {
        this.heap=[]
    }

    //parent index of node
    private parentIndex(index: number): number{
        return Math.floor((index - 1) / 2);
    }

    //child index -->left
    private leftChildIndex(index: number): number{
        return (2 * index) + 1;
    }
    private rightChildIndex(index: number): number{
        return (2 * index) + 2;
    }
    //swap
    private swap(index1: number, index2: number):void {
        // [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]

        //temp method
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    //heapifyDown
    private heapifyDown(index: number): void{
        const left = this.leftChildIndex(index)
        const right = this.rightChildIndex(index)
        let smallest = index
        
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest=left
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest=right
        }

        if (smallest !== index) {
            this.swap(index, smallest)
            this.heapifyDown(smallest)
        }
    }

    //heapifyUp
    private heapifyUp(index: number): void{
        while (index > 0 && this.heap[this.parentIndex(index)] > this.heap[index]) {
            this.swap(index, this.parentIndex(index));
            index=this.parentIndex(index)
        }
    }

    //insert value
    insert(value: number): void{
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    //peek
    peek(): number | undefined{
        return this.heap[0]
    }
    //extractMin
    extractMin(): number | undefined{
        if (this.heap.length === 0) return undefined;
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()!
        this.heapifyDown(0)
        return min
    }

}

const minhp = new MinHeaps()
console.log(minhp.insert(10))
console.log(minhp.insert(30))
console.log(minhp.insert(0))
console.log(minhp.insert(70))
console.log(minhp.insert(3))
console.log(minhp.peek())
console.log(minhp.extractMin())

console.log(minhp.peek())



