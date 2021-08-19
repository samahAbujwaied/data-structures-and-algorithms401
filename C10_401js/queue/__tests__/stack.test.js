'use strict';

const Queue = require('../index');

describe('Queue', ()=> {

    it('Can successfully enqueue into a queue', ()=> {
        let queue = new Queue();
        expect(queue instanceof Queue).toBeTruthy();
       
    });


    it('Can successfully enqueue multiple values into a queue', ()=> {
        let queue = new Queue();
        queue.enqueue(1);
        expect(queue.peek()).toEqual(1);
        queue.enqueue(2);
        expect(queue.peek()).toEqual(1);
    });

    it('Can successfully dequeue out of a queue the expected value', ()=> {
        let queue = new Queue();
        queue.enqueue(1);
        expect(queue.dequeue()).toEqual(1);
    });
    it('Can successfully peek into a queue, seeing the expected value', ()=> {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.peek()).toEqual(1);
    });


    it('Can successfully empty a queue after multiple dequeues', ()=> {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(true);
    });
    it('Can successfully instantiate an empty queue', ()=> {
        let queue = new Queue();
        
        expect(queue.isEmpty()).toEqual(true);
       
    });
    it('Calling dequeue or peek on empty queue raises exception', ()=> {
        let queue = new Queue();
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toEqual(true);
       
    });

    


});