'use strict';

const Node = require('./node');

class LinkedList {
  constructor () {
    this.head = null;
  }
  insert(value){
    try {
      this.head = new Node(value) ;
    }
    catch(error) {
      console.error('your error:',error);
    }
  }
  include(value){

    try {
      let boolean = false ;
      let check = this.head;
      while(check){
        if( check.value === value){
          boolean =true ;
          console.log('does is exist ?', boolean);
          return boolean;
        }
        check = check.next;
      }

      console.log('does is exist ?', boolean);
      return boolean ;
    }

    catch(error) {
      console.error('your error:',error);
    }

  }

  toString(){
    try {
      let array = [];
      let head = this.head ;
      while(head){
        array.push( '{ ');
        array.push(head.value);
        array.push(' }');
        array.push(' -> ');
        head=head.next ;
      }

      array.unshift('"');
      array.push('NULL"');
      let newArray= array.join('');
      console.log(newArray);
      return newArray;
    }

    catch(error) {
      console.error('your error:',error);
    }
  }


}

module.exports = LinkedList ;