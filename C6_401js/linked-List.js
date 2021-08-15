'use strict'
const Node=require('./node');
class linkedList{
    constructor(){
        this.head=null;
    }
    append(value) {
        let cur = this.head;
      console.log('value',value);
        while (cur) {
          if (cur.next === null) {
            console.log(cur.next);
            cur.next = new Node(value);
            console.log(cur.next);
            return;
          }
          cur = cur.next;
        }
      }  

      insert(value){
        try {
          this.head = new Node(value) ;
          console.log(`insert ${this.head}`);
        }
        catch(error) {
          console.error(`Error while inserting ${error}`);
        }
      }

      includes(value) {
        let cur = this.head;
        while (cur) {
          if (value === cur.value) {
            return true;
          } else if (cur.next === null) {
            return false;
          } else {
            cur = cur.next;
          }
        }
      }
    
      toString() {
        let cur= this.head;
        let string = '';
        while (cur) {
          let stringTwo = cur.value;
          cur = cur.next;
          string += `{${stringTwo}} -> `;
        }
        string += '{null}';
        return string;
      }
    
     
      
    insertBefore(value, newValue) {
    let cur = this.head;
    let newNode = new Node(newValue);
    while (cur.next !== null) {
      if (cur.value === value) {
        newNode.next = cur;
        this.head = newNode;
      } else if (cur.next.value === value) {
        let temp = cur.next;
        cur.next = newNode;
        newNode.next = temp;
        return;
      }
      cur = cur.next;
    }

  }
  insertAfter(value, newValue){
    let node=new Node(newValue);
    if(this.head){
      let cur=this.head;
      while(cur){
        if(cur.value===value){
          let temp=cur.next;
          cur.next=node;
          node.next=temp;
          return ;
        }
        cur=cur.next;
      }
    }
    return ;
  }

}

let newlink = new linkedList();
console.log(`the head of linked list ${newlink}`);
   
  newlink.append('noor');
  newlink.append('qasem')
  console.log('newlink',newlink.toString());
    let val1 = 'rawan';
    let val2 = 'roqaia'  
    let val3 = 'samah'
    newlink.insert(val1);
    newlink.insert(val2);
    newlink.insert(val3);
    console.log(`new ${newlink}`);
    console.log('newlink',newlink.toString());
    newlink.includes('rawan')
    newlink.toString();
module.exports=linkedList;