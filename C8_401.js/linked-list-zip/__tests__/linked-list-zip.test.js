'use strict';

const LinkedList = require('../../LinkedList');
const zipList = require('../linked-list-zip');

describe('zip linked list', () => {
  it('empty two linked list', () => {
    const linkedlist1 = new LinkedList();
    const linkedlist2 = new LinkedList();

    expect(zipList(linkedlist1, linkedlist2).toString()).toEqual('Exception');
  });
  it('The two linked list the same length', () => {
    const linkedlist1 = new LinkedList();
    const linkedlist2 = new LinkedList();
    const linkedlist13 = new LinkedList();
  
    //////////////////////////////////////////////////////
    linkedlist1.insert(1);
    linkedlist1.insert(2);
    //////////////////////////////////////////////////////
    linkedlist2.insert(3);
    linkedlist2.insert(4);
    //////////////////////////////////////////////////////
    linkedlist13.insert(1);
    linkedlist13.insert(3);
    linkedlist13.insert(2);
    linkedlist13.insert(4);
   
    expect(zipList(linkedlist1, linkedlist2).toString()).toEqual(linkedlist13.toString());
  });
  it('The two linked list different length , linkedlist1Length < linkedlist2Length', () => {
    const linkedlist1 = new LinkedList();
    const linkedlist2 = new LinkedList();
    const linkedlist13 = new LinkedList();
     //////////////////////////////////////////////////////

    linkedlist1.insert(1);
    linkedlist1.insert(2);
     //////////////////////////////////////////////////////

    linkedlist2.insert(3);
    linkedlist2.insert(4);
     //////////////////////////////////////////////////////

    linkedlist13.insert(1);
    linkedlist13.insert(3);
    linkedlist13.insert(2);
    linkedlist13.insert(4);
     //////////////////////////////////////////////////////

  

    expect(zipList(linkedlist1, linkedlist2).toString()).toEqual(linkedlist13.toString());
  });
  it('The two linked list different length , linkedlist1Length > linkedlist2Length', () => {
    const linkedlist1 = new LinkedList();
    const linkedlist2 = new LinkedList();
    const linkedlist13 = new LinkedList();
    //////////////////////////////////////////////////////
    linkedlist1.insert(1);
    linkedlist1.insert(2);
    //////////////////////////////////////////////////////
    linkedlist2.insert(3);
    linkedlist2.insert(4);
    ////////////////////////////////////////////////////// 
    linkedlist13.insert(1);
    linkedlist13.insert(3);
    linkedlist13.insert(2);
    linkedlist13.insert(4);
     //////////////////////////////////////////////////////
    expect(zipList(linkedlist1, linkedlist2).toString()).toEqual(linkedlist13.toString());
  });
});
