'use strict';

class Stack {

  constructor() {
    this.storage = new Array();
    this.top = null;
    this.idx = 0;

  }

  push(val) {
    this.storage.unshift(val);
    this.top = val;
  }

  peek() {
    return this.top;
  }

  pop() {
    let val = this.storage.shift();
    this.top = this.storage[0];
    return val;
  }

  isEmpty() {
    return this.idx === 0;
  }
  EmptyQ() {
    if (this.isEmpty()) {
      throw new Error('Error');
    }
  }


}

module.exports = Stack;
