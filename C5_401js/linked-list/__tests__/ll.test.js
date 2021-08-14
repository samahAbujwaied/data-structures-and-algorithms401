'use strict';

const LinkedLilst = require('../linked-list');

describe('linkedlist', () => {

  it('checking for head on linked list to be null',()=>{
    let linked = new LinkedLilst();
    expect(linked.head).toBeNull();
  });
  it('should insert new item to empty linked list', () => {
  
    let newlink = new LinkedLilst();
    let value = 'a';
    newlink.insert(value);
    expect(newlink.head.value).toEqual(value);
    expect(newlink.head.next).toBeNull();
  });

  it('should insert new item to not empty linked list', () => {

    let newlink = new LinkedLilst();
    newlink.insert(5);
    let newValue = 10;
    newlink.insert(newValue);

    expect(newlink.head.value).toEqual(newValue);
    expect(newlink.head.next).toBeNull();
  });


  it('should insert item', () =>{
    let newLink = new LinkedLilst();
    newLink.insert(9);
    let value = 1 ;
    newLink.insert(value);
    expect(newLink.head.value).toEqual(1);
  });

  it('should return boolean true if include false if not include', () =>{
    let newLink = new LinkedLilst();
    newLink.insert(9);
    newLink.insert(8);
    newLink.insert(7);
    newLink.insert(6);
    newLink.insert(5);
    let value = 1 ;
    let value2 = 7 ;
    newLink.include(value);
    newLink.include(value2);
    expect(newLink.include(value)).toEqual(false);
    expect(newLink.include(value2)).toEqual(false);
  });

  it('should return string', () =>{
  
    let newLink = new LinkedLilst();
    newLink.insert(9);
    newLink.insert(8);
    newLink.insert(7);
    newLink.insert(6);
    newLink.insert(5);
    newLink.toString();
 
    expect(newLink.toString()).toEqual(("\"{ 5 } -> NULL\""));

  });

});