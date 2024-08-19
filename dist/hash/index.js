"use strict";
class hashMapNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class hashMap {
    constructor(initialCapacity = 3, loadFactor = 0.75) {
        this.capacity = initialCapacity;
        this.bucket = new Array(this.capacity).fill(null);
        this.size = 0;
        this.loadFactor = loadFactor;
    }
    hash(key) {
        let hash = 0;
        const keyString = key.toString();
        for (let i = 0; i < keyString.length; i++) {
            hash = (hash << 5) - hash + keyString.charCodeAt(i);
            hash = hash && hash;
            console.log(hash);
        }
        console.log(Math.abs(hash) % this.capacity);
        return Math.abs(hash) % this.capacity;
    }
    resize() {
        this.capacity *= 2;
        const newBuckets = new Array(this.capacity).fill(null);
        for (let i = 0; i < this.bucket.length; i++) {
            let node = this.bucket[i]; //traverse the aray i value
            while (node !== null) {
                //new index new node->existing node or null newbucket->newnode(array) 
                const newIndex = this.hash(node.key);
                const newNode = new hashMapNode(node.key, node.value);
                newNode.next = newBuckets[newIndex];
                newBuckets[newIndex] = newNode;
                node = node.next; //traverse the linkedlist
            }
        }
        this.bucket = newBuckets;
    }
    put(key, value) {
        // 1.check for resizing 2.compute hash foe given key 3.check if present update it or else create newnode and insert it
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
        //compute hash foe given key
        const index = this.hash(key);
        let node = this.bucket[index];
        while (node !== null) {
            if (node.key === key) {
                node.value = value;
                return;
            }
            node = node.next;
        }
        const newnode = new hashMapNode(key, value);
        newnode.next = this.bucket[index];
        this.bucket[index] = newnode;
        this.size++;
    }
    get(key) {
        const index = this.hash(key);
        let node = this.bucket[index];
        while (node !== null) {
            if (node.key === key) {
                return node.value;
            }
            node = node.next;
        }
        return undefined;
    }
    // apple -> banana -> cherry
    remove(key) {
        //1.calc index with key using hash() get node 2.traverse the node if key found check it has any prev value 
        const index = this.hash(key);
        let node = this.bucket[index];
        let prev = null;
        while (node !== null) {
            if (node.key === key) {
                if (prev === null) {
                    this.bucket[index] = node.next;
                }
                else {
                    prev.next = node.next;
                }
                this.size--;
                return true;
            }
            prev = node;
            node = node.next;
        }
        return false; //key not found
    }
    printMap() {
        for (let i = 0; i < this.capacity; i++) {
            let node = this.bucket[i];
            let bucketString = `Bucket ${i}: `;
            while (node !== null) {
                bucketString += `${node.key} : ${node.value} -> `;
                node = node.next;
            }
            bucketString += "null";
            console.log(bucketString);
        }
    }
}
const hashmap = new hashMap();
hashmap.put("1", 2);
hashmap.put("rock", 34);
hashmap.put("mocky", 134);
hashmap.put("roc2k", 34);
hashmap.put("roc2k", 44);
hashmap.remove("1");
console.log(hashmap.get("roc2k"));
hashmap.printMap();
