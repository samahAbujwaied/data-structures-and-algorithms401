'use strict';
class Queue{
    constructor(){
        this.storage=new Array(); 
         this.idx=0;

    }
    enqueue(val){
        this.storage.push(val);
    }
    dequeue(){
        return this.storage.shift();
    }
    peek(){
        return this.storage[0];
    }

    isEmpty(){
        return this.idx ===0;
      }
     EmptyQ(){
        if (this.isEmpty()){
          throw new Error ('Error');
        }
      }
    }

module.exports = Queue;