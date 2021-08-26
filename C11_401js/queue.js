"use strict";

const Stack=require('./stack');

class Queue{
    constructor(){
        this.poptoStack = new Stack();
        this.pushtoStack = new Stack();
        this.size = 0;
    }
    enqueue(data){
        this.pushtoStack.push(data);
        this.size = this.pushtoStack.length + this.poptoStack.length;
    }
    dequeue(){
        if (this.poptoStack.length > 0) {
            this.size = this.pushtoStack.length + this.poptoStack.length - 1;
            return this.poptoStack.pop();
        }

        while(this.pushtoStack.length > 0) {
            this.poptoStack.push(this.pushtoStack.pop())
        }

        this.size = this.pushtoStack.length + this.poptoStack.length - 1;
        return this.poptoStack.pop();
    }
    
    peek(){
        let data;
        if (this.front) {
            data=this.front.data;
            return data
        }
        throw new Error('queue is empty'); 
    }

    isEmpty(){
        if(!this.front){
            throw new Error('queue is empty'); 
        }
        return 'done....!'
    }
    
}

let queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

console.log(queue);

module.exports=Queue;