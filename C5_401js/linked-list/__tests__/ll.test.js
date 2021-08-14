'use strict';

const LinkedList = require('../linked-list');

describe('linkedlist', () => {

  it('checking for head on linked list to be null',()=>{
    let linked = new LinkedList();
    expect(linked.head).toBeNull();
  });
  it('should insert new item to empty linked list', () => {
  
    let newlink = new LinkedList();
    let value = 'samah';
    newlink.insert(value);
    expect(newlink.head.value).toEqual(value);
    expect(newlink.head.next).toBeNull();
  });

  it('adding new item', () => {

    let newlink = new LinkedList();
    let newvalue = 'samah';
    newlink.insert(newvalue);
    
    expect(newlink.head.value).toEqual(newvalue);
    expect(newlink.head.next).toBeNull();
  });


  it('should insert item', () =>{
    let newLink = new LinkedList();
    newLink.insert('samah');
    let value = 'abujwaied' ;
    newLink.insert(value);
    expect(newLink.head.value).toEqual('abujwaied');
  });

  it('checking if have the node by sending the value', () =>{
    let newLink = new LinkedList();
    newLink.insert(2);
    newLink.insert(4);
    
    let value1 = 4 ;
    let value2 = 1 ;
    newLink.include(value1);
    newLink.include(value2);
    expect(newLink.include(value1)).toEqual(true);
    expect(newLink.include(value2)).toEqual(false);
  });

  it('To return all nodes', () =>{
  
    let newLink = new LinkedList();
    newLink.insert(5);
    newLink.toString();
 
    expect(newLink.toString()).toEqual(("\"{ 5 } -> NULL\""));

  });

});