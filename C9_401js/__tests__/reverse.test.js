'use strict';

const LinkedList = require('../linkedlist');

const linkedlist1 = new LinkedList();
describe('Reverse a Linked List.', () => {
  it('Check if the node is insert on Linked list', () => {
    
    expect(linkedlist1.insert(1)).toEqual({"data": 1, "next": null});
  });
  it('Check if the node is insert on Linked list', () => {
    expect(linkedlist1.insert(2)).toEqual({"data": 2, "next": null});
  });
  it('Check if the linked list is reversed or not for 4 item ', () => {
    const linkedlist1 = new LinkedList();
  
    linkedlist1.insert(1)
    linkedlist1.insert(2)
    linkedlist1.insert(3)
    linkedlist1.insert(4)
   
    expect(linkedlist1.reverse()).toEqual({"data": 4, "next": {"data": 3, "next": {"data": 2, "next": {"data": 1, "next": null}}}});
  });
  it('Check if the linked list is reversed or not for 3 item ', () => {
    const linkedlist1 = new LinkedList();
  
    linkedlist1.insert(4)
    linkedlist1.insert(3)
    linkedlist1.insert(2)
    
   
    expect(linkedlist1.reverse()).toEqual({"data": 2, "next": {"data": 3, "next": {"data": 4, "next":  null}}});
  });
  it('check linked list before add', () => {
    const linkedlist1 = new LinkedList();
    expect(linkedlist1.toString()).toBeNull;
  });
  
});
