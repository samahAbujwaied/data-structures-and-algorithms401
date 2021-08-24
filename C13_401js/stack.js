'use strict';
const Node = require ('./Node');

class Stack {
    constructor() {
        this.storage = {};
        this.top = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value, this.top || null);
        this.size++;
        this.storage[this.size] = newNode;
        this.top = this.storage[this.size];
    }

    pop() {
        if (this.isEmpty()) throw new Error('Cannot pop() from empty stack');

        let popped = this.top;
        delete this.storage[this.size]; 
        this.size--;
        this.top = this.storage[this.size] || null;
        return popped;
    }

    peek() {
        if (this.isEmpty()) throw new Error('Cannot peek() empty stack');

        return this.top;
    }

    isEmpty() {
        return this.size === 0 ? true : false;
    }
}

const x = new Stack();
x.push('{');
x.push('(');
x.push('}');
// console.log(x);
module.exports =Stack