'use strict';

class Stack {
    constructor() {
        this.storage = new Array();
        this.top = null;  
    }
    push(item) {
         this.storage.unshift(item);
        this.top = item;  }
    peek() {return this.top;}

    pop() {
        let item = this.storage.shift();
        this.top = this.storage[0];
        return item;}

    isEmpty(){
        if(this.top === undefined){return true;}
        else return false;}
}


module.exports = Stack;
console.log(' on stack ');
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3)
const p = stack.peek();
console.log('p',p);
const po = stack.pop();
console.log('pop',po);
const p1 = stack.peek();
console.log('p',p1);
const emp = stack.isEmpty();
console.log('emp',emp);
stack.pop();
 stack.pop();
 const p2 = stack.peek();
console.log('p',p2);
const emp1 = stack.isEmpty();
console.log('emp',emp1);

// let arr = [1,2,3] 
// arr.push(4)
// [1, 2, 3, 4]

// arr.unshift(5)
// [5, 1, 2, 3, 4]