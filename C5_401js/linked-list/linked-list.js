'use strict';

const Node = require('./node');

class LinkedList {
  constructor () {
    this.head = null;
    console.log(`from constructor ${this.head}`);
  }
  insert(value){
    try {
      this.head = new Node(value) ;
      console.log(`from insert ${this.head}`);
    }
    catch(error) {
      console.error(`Error while inserting ${error}`);
    }
  }

  include(value){
    try {
      let bool = false ;
      let test = this.head;
      console.log(`test ${this.head}`);
      while(test){
        if( test.value == value){
          bool =true ;
          console.log(`inclouding side ${bool}`);
          return bool;
        }
        test = test.next;
      }
      console.log(`inclouding side ${bool}`);
      return bool;
    }

    catch(error) {
      console.error(`Error while searching ${error}`);
    }
  }

  toString(){
    try {
      let linkedArr = [];
      let head = this.head ;
      while(head){
        linkedArr.push( '{ ');
        linkedArr.push(head.value);
        linkedArr.push(' }');
        linkedArr.push(' -> ');
        head=head.next ;
      }
      linkedArr.unshift('"');
      linkedArr.push('NULL"');
      let newArray= linkedArr.join('');
      console.log(newArray);
      return newArray;
    }

    catch(error) {
      console.error(`Error while convering ${error}`);
    }
  }


}
let newlink = new LinkedList();
console.log(`the head of linked list ${newlink}`);
  
    let val1 = 'samah';
    let val2 = 'roqaia'  
    let val3 = 'rawan'
    newlink.insert(val1);
    newlink.insert(val2);
    newlink.insert(val3);
    console.log(newlink);
    newlink.include('rawan')
    newlink.toString();

   
module.exports = LinkedList ;