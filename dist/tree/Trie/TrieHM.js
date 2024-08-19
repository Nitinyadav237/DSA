"use strict";
class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}
class TrieHM {
    constructor() {
        this.root = new TrieNode();
    }
    //insert 1.create a node(this.root) 2.iterate over the char of word if it exist move to next (by moving node) else set children value in map 2.mark of eow
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.endOfWord = true;
    }
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char))
                return false;
            node = node.children.get(char);
        }
        return node.endOfWord;
    }
    startWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char))
                return false;
            node = node.children.get(char);
        }
        return true;
    }
    delete(word) {
        this.root = this.deleteRecursively(this.root, word, 0);
    }
    deleteRecursively(node, word, depth) {
        if (node === null)
            return null;
        //endofWord is reached 
        if (depth === word.length) {
            //1.eow is not true
            if (!node.endOfWord)
                return null;
            // 2.eow is true
            node.endOfWord = false;
            //node has no no children it cna removed
            if (node.children.size === 0)
                return null;
            return node;
        }
        // recur for child node
        const char = word[depth];
        const childNode = this.deleteRecursively(node.children.get(char) ?? null, word, depth + 1);
        if (childNode === null) {
            node.children.delete(char);
            if (!node.endOfWord && node.children.size === 0)
                return null;
        }
        return node;
    }
    printTrie() {
        const words = [];
        this.collectWords(this.root, "", words);
        console.log(words.join(","));
    }
    collectWords(node, prefix, words) {
        if (node === null)
            return;
        if (node.endOfWord)
            words.push(prefix);
        for (const [char, childNode] of node.children) {
            this.collectWords(childNode, prefix + char, words);
        }
    }
}
const trieHm = new TrieHM();
console.log(trieHm.insert("words"));
console.log(trieHm.insert("fasds"));
console.log(trieHm.insert("wds"));
console.log(trieHm.delete("wds"));
console.log(trieHm.printTrie());
console.log(trieHm.startWith("w"));
