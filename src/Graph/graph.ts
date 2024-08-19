//adjacency list representation

class Graph<T>{
    private adjacencyList: Map<T, Set<T>>
    constructor() {
        this.adjacencyList=new Map()
    }

    addVertex(vertex: T): void{
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, new Set())
        }
    }
    addEdge(vertex1: T, vertex2: T): void{
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2)
        }
        this.adjacencyList.get(vertex1)?.add(vertex2)
        this.adjacencyList.get(vertex2)?.add(vertex1)
    }
    // adjacencyList: Map<string, Set<string>> = {
//   'A': Set<string>('B', 'C'),
//   'B': Set<string>('A', 'D'),
//   'C': Set<string>('A'),
//   'D': Set<string>('B')
// }

    removeVertex(vertex: T): void{
        if (this.adjacencyList.has(vertex)) {
            for (const neigh of this.adjacencyList.get(vertex)!) {
                this.adjacencyList.get(neigh)?.delete(vertex)
            }
            this.adjacencyList.delete(vertex)
        }
    }

    removeEdge(vertex1: T, vertex2: T): void{
        this.adjacencyList.get(vertex1)?.delete(vertex2)
        this.adjacencyList.get(vertex2)?.delete(vertex1)
    }

    getNeighbors(vertex: T): Set<T> | undefined{
        return this.adjacencyList.get(vertex)
    }
    hasVertex(vertex: T): boolean{
        return this.adjacencyList.has(vertex)
    }

    hasEdge(vertex1: T, vertex2: T): boolean{
        return this.adjacencyList.get(vertex1)?.has(vertex2) ?? false
    }

    //A->B,C
    printGraph(): void{
        console.log("graph State:")
        for (const [vertex, neigh] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${[...neigh].join(", ")}`)
        }
    }

    //bfs
    bfs(start:T): void{
        const visited = new Set<T>();
        const queue: T[] = [start];
        while (queue.length > 0) {
            const vertex = queue.shift()!;
            if (visited.has(vertex)) continue;

            console.log(vertex);
            visited.add(vertex)

            for (const neigh of this.adjacencyList.get(vertex) || []) {
                if (!visited.has(neigh)) {
                    queue.push(neigh)
                }
            }
        }
    }

    dfsStack(start: T): void{
        const visited = new Set<T>()
        const stack: T[] = [start]
        
        while (stack.length > 0) {
            const vertex = stack.pop()!
            if (visited.has(vertex)) continue;

            console.log(vertex)
            visited.add(vertex)

            for (const neigh of this.adjacencyList.get(vertex) || []) {
                if (!visited.has(neigh)) {
                    stack.push(neigh)
                }
            }
        }
    }

    //dfs recursion
    //1.base condition if visited return 2.process the vertex 2.mark as visited 4/ recursive all unvisited neighbor
    dfs(start: T, visited: Set<T> = new Set<T>()): void{
        if (visited.has(start)) return;
        
        console.log(start) //process the vertex
        visited.add(start) //mark as visited

        for (const neigh of this.adjacencyList.get(start) || []) {
            if (!visited.has(neigh)) {
                this.dfs(neigh,visited)
            }
        }
    }

}


const graph = new Graph<number>()
console.log(graph.addVertex(1))
console.log(graph.addVertex(2))
console.log(graph.addVertex(3))
console.log(graph.addVertex(4))
console.log(graph.addEdge(4,1))
console.log(graph.addEdge(3,4))
// console.log(graph.removeEdge(1, 4))
console.log(graph.bfs(4))
console.log(graph.dfsStack(1))
console.log(graph.dfs(3))


console.log(graph.printGraph())

console.log(graph.hasEdge(3,4))   

