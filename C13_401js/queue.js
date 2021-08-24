'use strict';
const Node = require ('./Node');

class Queue {
    constructor() {
        this.storage = {};
        this.front = null;
        this.rear = null;
        this.frontIndex = 0;
        this.rearIndex = 0;
        this.size = 0;
    }

    enqueue(value) {
        let newNode = new Node(value, null); 
        this.storage[this.rearIndex] = newNode;
        this.front = this.storage[this.frontIndex];
        this.rear = this.storage[this.rearIndex];
        this.rearIndex++;
        this.size = this.rearIndex - this.frontIndex;
        if (this.size > 1) {
            this.storage[this.rearIndex - 2].next = this.storage[this.rearIndex - 1];
        }
    }

    dequeue() {
        if (this.isEmpty()) throw new Error('Cannot dequeue() empty queue');

        let dequeued = this.front;
        delete this.storage[this.frontIndex];
        this.frontIndex++;
        this.front = this.storage[this.frontIndex] || null;
        this.size = this.rearIndex - this.frontIndex;

        return dequeued;
    }

    peek() {
        if (this.isEmpty()) throw new Error('Cannot peek() empty queue');

        return this.front;
    }

    isEmpty() {
        return this.size === 0 ? true : false;
    }
}

module.exports=Queue