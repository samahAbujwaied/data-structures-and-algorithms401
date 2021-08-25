'use strict';

class Stack {
    constructor() {
        this.storage = new Array();
        this.top = null;
    }
    push(item) {
        if (typeof item == "string")
            throw new Error('your input is string');
        this.storage.unshift(item);
        this.top = item;
    }
    peek() { return this.top; }

    pop() {
        let item = this.storage.shift();
        this.top = this.storage[0];
        return item;
    }

    isEmpty() {
        if (this.top === undefined) { return true; }
        else return false;
    }

    getMax() {
        if (this.top)

        {
            let i = 0;
        let item = this.storage[i]
        {
            while (this.storage[i]) {
                if (this.storage[i] > item) {
                    item = this.storage[i]
                    console.log('----->', item);
                }
                i++
            }
        }
        return item}
        else 
        return ('Array is empty....!')
    }
}


module.exports = Stack;
console.log(' on stack ');
const stack = new Stack();
stack.push(900);
stack.push(10);
stack.push(800);
stack.push(6000);
stack.push(700);
stack.push(9000);
stack.push(500);
stack.push(500);
stack.push(500);
stack.push(5000000000000000000);
stack.push(1);
console.log(stack.getMax());
