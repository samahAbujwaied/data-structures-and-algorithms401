"use strict";

const Node = require("./node");

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return null;

    let temp = this.head;

    if (this.length === 1) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return temp;
  }

  peek() {
    let data;
    if (this.head) {
      data = this.head.data;
      return data;
    }
    throw new Error("stack is empty");
  }

  isEmpty() {
    if (!this.head) {
      throw new Error("stack is empty");
    }
    return "done....!";
  }
}

module.exports = Stack;