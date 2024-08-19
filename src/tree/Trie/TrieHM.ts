class TrieNode<T>{
    children: Map<string, TrieNode<T>>;
    endOfWord: boolean;

    constructor() {
        this.children = new Map()
        this.endOfWord=false
    }

}

class TrieHM<T>{
    private root: TrieNode<T> | null;
    constructor() {
        this.root=new TrieNode<T>()
    }

    //insert 1.create a node(this.root) 2.iterate over the char of word if it exist move to next (by moving node) else set children value in map 2.mark of eow
    
    insert(word: string): void{
        let node:TrieNode<T>|null = this.root
        for (const char of word) {
            if (!node!.children.has(char)) {
                node!.children.set(char,new TrieNode<T>())
            }
            node=node!.children.get(char)!
        }
        node!.endOfWord=true
    }

    search(word: string): boolean{
        let node = this.root
        for (const char of word) {
            if (!node!.children.has(char)) return false;
            node=node!.children.get(char)!
        }
        return node!.endOfWord
    }

    startWith(prefix: string): boolean{
        let node = this.root
        for (const char of prefix) {
            if (!node!.children.has(char)) return false;
            node=node!.children.get(char)!
        }
        return true

    }

    delete(word: string): void{
        this.root=this.deleteRecursively(this.root,word,0)
    }
    deleteRecursively(node: TrieNode<T> | null, word: string, depth: number): TrieNode<T> | null{
        if (node === null) return null;
        //endofWord is reached 
        if (depth === word.length) {
            //1.eow is not true
            if (!node.endOfWord) return null;
            // 2.eow is true
            node.endOfWord = false;
            //node has no no children it cna removed

            if (node.children.size === 0) return null;
            return node
        }

        // recur for child node
        const char = word[depth]
        const childNode = this.deleteRecursively(node.children.get(char) ?? null, word, depth + 1)

        if (childNode === null) {
            node.children.delete(char)
            if(!node.endOfWord && node.children.size===0) return null
        }
        return node
    }

    printTrie(): void{
        const words: string[] = []
        this.collectWords(this.root,"",words)
        console.log(words.join(","))
    }

    private collectWords(node: TrieNode<T> | null, prefix: string, words: string[]): void{
        if (node === null) return ;
        if (node.endOfWord) words.push(prefix)
        
        for (const [char,childNode] of node.children) {
            this.collectWords(childNode, prefix + char, words)
        }
    }
}


const trieHm = new TrieHM<string>()
console.log(trieHm.insert("words"))
console.log(trieHm.insert("fasds"))
console.log(trieHm.insert("wds"))
console.log(trieHm.delete("wds"))
console.log(trieHm.printTrie())

console.log(trieHm.startWith("w"))

