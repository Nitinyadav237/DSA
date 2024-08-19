"use strict";
class MyArray {
    constructor() {
        this.data = [];
        this.length = 0;
    }
    getLength() {
        return this.length;
    }
    getData() {
        return this.data;
    }
    push(ele) {
        this.data[this.length] = ele;
        this.length++;
    }
    pop() {
        if (this.length === 0)
            return undefined;
        const lastele = this.data[this.length - 1];
        this.length--;
        this.data.length = this.length;
        return lastele;
    }
    shift() {
        if (this.length === 0)
            return undefined;
        //if it is filled 
        const shiftedElement = this.data[0];
        //shifted element forward [1,2,3] [2,3]
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
        this.data.length = this.length;
        return shiftedElement;
    }
    unshift(ele) {
        //insert ele from last
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = ele;
        this.length++;
    }
    insert(index, ele) {
        if (index < 0 || index > this.length) {
            throw new Error("Out of Bound");
        }
        for (let i = index; i < this.length; i++) {
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = ele;
        this.length++;
    }
    insert1(ind, ele) {
        if (ind < 0 || ind > this.length) {
            throw new Error("out of bond");
        }
        for (let i = this.length; i > ind; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[ind] = ele;
        this.length++;
    }
    remove(ind) {
        if (ind < 0 || ind >= this.length) {
            throw new Error("out of bond");
        }
        const removeEle = this.data[ind];
        for (let i = ind; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
        this.data.length = this.length;
        return removeEle;
    }
}
const arr = new MyArray;
arr.push(1);
arr.push(2);
arr.push(4);
arr.push(3);
arr.push(5);
console.log(arr.getData());
console.log(arr.getLength());
console.log(arr.remove(1));
console.log(arr.pop());
console.log(arr.getData());
console.log(arr.getLength());
// console.log(arr.insert(-1, 24))
// // console.log(arr.getData())
// try {
//   arr.insert(-1, 24);
// } catch (e:any) {
//   console.log(e.message); // Output: Out of Bounds
// }
