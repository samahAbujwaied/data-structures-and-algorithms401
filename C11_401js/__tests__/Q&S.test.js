'use strict';
const Queue = require("../queue");
const Stack = require("../stack");
const Node = require("../node");

describe("stack-queue-pseudo", () => {
  it("constructor", () => {
    let data = 1;
    let newNode = new Node(data);
    expect(newNode.data).toEqual(data);
    expect(newNode.next).toBeNull();
  });
});

describe("Queue----------->", () => {
  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size).toBe(2);
  });

  it("Can successfully dequeue out of a queue the expected data", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.size).toBe(1);
  });
  it("empty queue stack", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.size).toBe(0);
  });
});

describe("Stack----------->", () => {
  it("Can successfully push onto a stack", () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.head.data).toBe(1);
  });

  it("Can successfully push multiple datas onto a stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.head.data).toBe(2);
  });

  it("Can successfully pop off the stack", () => {
    let stack = new Stack();
    stack.push(2);
    stack.push(4);
    stack.push(1);
    stack.pop();
    expect(stack.head.data).toBe(4);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.head).toBeNull()
  });

  it("Can successfully peek the next item on the stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
  });

  it("Can successfully instantiate an empty stack", () => {
    let stack = new Stack();
    let newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    expect(stack).toBeInstanceOf(Stack);
    expect(newStack.isEmpty()).toBe("done....!");
  });
});
