'use strict';
const Node = require ('./Node');

class LinkedList {
  constructor(){
    this.head = null;
    this.length=0;
  }
  insert (value){
    const node = new Node(value);
    if (!this.head){
      this.head = node;
      this.length++;
    }else {
      let currentNode = this.head;
      while (currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next=node;
      this.length++;
    }
  }
  include (value){
    let currentNode = this.head;
    let result=false;
    while(currentNode.next){
      currentNode = currentNode.next;
      if(currentNode.value === value){
        result = true;
        return result;
      }
    }
    return result;
  }
  toString (){
    let pointer = this.head;
    let result ='';
    while (pointer){
      result += `{${pointer.value}}->`;
      pointer =pointer.next;
      if(!pointer){
        result += 'NULL';
      }
    }
    return result;
  }
  append (value){
    let node = new Node(value);
    this.length++;
    if(!this.head){
      this.head=node;
    }else {
      let desiredNode = this.head;
      while (desiredNode.next){
        desiredNode = desiredNode.next;
      }
      desiredNode.next = node;
    }
  }
  insertAfter (value,newValue){
    let node = new Node (newValue);
    let nodeLooper = this.head;
    while(nodeLooper){
      if(nodeLooper.value === value){
        let temNext = nodeLooper.next;
        this.length++;
        nodeLooper.next = node;
        node.next = temNext;
        return;
      }
      nodeLooper = nodeLooper.next;
    }
    return 'Exception';
  }

  insertBefore (value,newValue){
    let node = new Node (newValue);
    let nodeLooper = this.head;
    while(nodeLooper.next){
      if(nodeLooper.next.value === value){
        let temNext = nodeLooper.next;
        this.length++;
        nodeLooper.next = node;
        node.next = temNext;
        return;
      }
      nodeLooper = nodeLooper.next;
    }
    return 'Exception';
  }
  kthFromEnd(k){
    let nodeLooper = this.head;
    let position = this.length-1-k;
    let index=0;
    while(nodeLooper){
      if(position === index){
        return nodeLooper.value;
      }
      nodeLooper = nodeLooper.next;
      index++;
    }
    return 'Exception';
  }

}
const ll = new LinkedList();
console.log('ll--------->befor',ll.toString());
ll.insert(2);
ll.insert(3);
ll.insert(4);
console.log('ll--------->after',ll.toString());
ll.append(5);
console.log('ll--------->after2',ll.toString());
const inc = ll.include(3);
console.log('inc 111111', inc); 
const inc2 = ll.include(1);
console.log('inc 111111', inc2); 
const inaf = ll.insertAfter(5,8)
console.log('ll--------->after3',ll.toString());
ll.insertBefore(8,7)
console.log('ll--------->after4',ll.toString());
ll.kthFromEnd(0);
console.log('ll--------->after5',ll.toString());
module.exports = LinkedList;
