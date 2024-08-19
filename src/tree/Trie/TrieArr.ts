class TrieNodeArray<T>{
    children: (TrieNodeArray<T> | null)[];
    endofWord: boolean;
    value: T | null;

    constructor() {
        this.children = new Array(26).fill(null);
        this.endofWord = false;
        this.value = null;
    }
}

class TrieArr<T>{
    private root: TrieNodeArray<T>
    
    constructor() {
        this.root = new TrieNodeArray<T>();
    }

    // helper to char to index

    private charToIndex(char: string): number{
        return char.charCodeAt(0)-"a".charCodeAt(0)        
    }

    insert(word: string): void{
        let node = this.root
        for (const char of word) {
            const index = this.charToIndex(char)
            if(node.children[index] === null){
                node.children[index]=new TrieNodeArray<T>()        
            }
            node=node?.children[index]
        }
        node.endofWord=true
    }
    search(word: string):boolean {
        let node = this.root
        for (const char of word) {
            const index = this.charToIndex(char)
            if (node.children[index] === null) return false
            node=node.children[index]
        }
        return node.endofWord
    }
    startWith(prefix: string):boolean {
        let node = this.root
        for (const char of prefix) {
            const index = this.charToIndex(char)
            if (node.children[index] === null) return false
            node=node.children[index]
        }
        return true
    }

    delete(word: string): void{
        this.root=this.deleteRecursively(this.root,word,0)!
    }
    private deleteRecursively(node: TrieNodeArray<T> | null, word: string, depth: number): TrieNodeArray<T>|null{
        
        if (node === null) return null;
        
        if (depth === word.length) {
            //1.eow is false
            if (!node.endofWord) return null;
            //2.eow is true
            node.endofWord = false
            if (node.children.every(child => child === null)) return null;
            return node;
        }
        
        const index = this.charToIndex(word[depth])//0
        const childNode = this.deleteRecursively(node.children[index], word, depth + 1)
        
        if (childNode === null) {
            node.children[index] = null;
            if(!node.endofWord && node.children.every(child=>child===null)) return null
        }
        return node
    }
     printTrie(): void {
        const words: string[] = [];
        this.collectWords(this.root, "", words);
        console.log(words.join(","));
    }
    private collectWords(node: TrieNodeArray<T>|null, prefix: string, words: string[]): void {
        if (node === null) return;
        if (node.endofWord) words.push(prefix);

        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i] !== null) {
                this.collectWords(node.children[i]!, prefix + String.fromCharCode(i + 'a'.charCodeAt(0)), words);
            }
    }
    }
}


const trieArray = new TrieArr<string>();
trieArray.insert("words");
trieArray.insert("fasds");
trieArray.insert("wds");
trieArray.delete("wds");
trieArray.printTrie();

console.log(trieArray.search("words")); 
console.log(trieArray.search("wds"));   
console.log(trieArray.startWith("w"));