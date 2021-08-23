'use strict'

class Stack {
    constructor(item) {
        this.item = item;
        this.Arr = [];
    }
    push(item) {
        if (this.Arr.length >= 0) {
            this.Arr.push(item);
        }
    }

    pop() {
        if (this.Arr.length > 0) {
            let data = this.Arr.pop();
            return data;
        } else {
            return 'Exception';
        }
    }

    peek() {
        let data= this.Arr; 
        return data
    }
    isEmpty() {
        if (!this.Arr.length > 0) {
            return true
        } else {
            return false
        }
    }

}
/* -----------Test if work well --------*/
const stack = new Stack();
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
stack.pop()
stack.pop()
stack.peek()
stack.pop()
console.log(stack.isEmpty())

module.exports = Stack