'use strict';

const Queue = require('../queue');
const stack = require('../stack');

describe('Testing for Queue', () => {
    let checkQ = new Queue();
    it('enqueue one item on array', () => {
        checkQ.enqueue(1);
        expect(checkQ.peek()).toEqual([1])
    })
    it('enqueue two or more item on array', () => {
        checkQ.enqueue(1);
        checkQ.enqueue(2);
        checkQ.enqueue(3);
        expect(checkQ.peek()).toEqual([1,1,2,3])
    })
    it('dequeue item from array', () => {
        let checkQ = new Queue();
        let deq =  checkQ.dequeue();
        expect(deq).toEqual('Exception')
    })
   
    it('enqueue and dequeue from array', () => {
        let checkQ = new Queue();
        checkQ.enqueue(1);
        checkQ.enqueue(2);
        checkQ.enqueue(3);
        checkQ.dequeue();
        expect(checkQ.peek()).toEqual([2, 3])
    })
    it('The queue array is not empty', () => {
        let checkQ = new Queue();
        checkQ.enqueue(1);
        checkQ.enqueue(2);
        checkQ.enqueue(3);
        expect(checkQ.isEmpty()).toEqual(false)
    })
    it('The queue array is empty', () => {
        let checkQ = new Queue();
        expect(checkQ.isEmpty()).toEqual(true)
    })
})

describe('Testing for Stack', () => {
    it('push one item on array ', () => {
        let checkS = new stack();
        checkS.push(2);
        expect(checkS.peek()).toEqual([2])
    })
    it('push two item or more on array ', () => {
        let checkS = new stack();
        checkS.push(1);
        checkS.push(2);
        expect(checkS.peek()).toEqual([1, 2])
    })
    it('pop from array', () => {
        let checkS = new stack();
        checkS.pop();
        expect(checkS.pop()).toEqual('Exception')
    })
   
    it('push and pop from array ', () => {
        let checkS = new stack();
        checkS.push(1);
        checkS.push(2);
        checkS.push(3);
        checkS.pop();
        expect(checkS.peek()).toEqual([1,2])
    })
    it('The stack array is not empty', () => {
        let checkS = new stack();
        checkS.push(2);
        checkS.push(5);
        checkS.push(3);
        expect(checkS.isEmpty()).toEqual(false)
    })
    it('The stack array is  empty', () => {
        let checkS = new stack();
        expect(checkS.isEmpty()).toEqual(true)
    })
})
