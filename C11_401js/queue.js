'use strict'

class Queue {
    constructor(item) {
        this.item = item;
        this.Arr = [];
    }
    enqueue(item) {
        if (this.Arr.length >= 0) {
            this.Arr.push(item)
        }
    }

    dequeue() {
        if (this.Arr.length > 0) {
            let data = this.Arr.shift()
            return data
        } else {
            return 'Exception'
        }
    }

    peek() {
        let data = this.Arr
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
const queue = new Queue();
console.log(queue.isEmpty())
queue.enqueue(1)
queue.enqueue(2)
queue.peek()
queue.enqueue(2)
queue.dequeue()
queue.dequeue()
queue.peek()
console.log(queue.isEmpty())

module.exports = Queue