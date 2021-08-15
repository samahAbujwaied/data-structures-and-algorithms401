'use strict';
'use strict';

const LinkedList=require('../linked-List');



describe('test Singly Linked Lists',()=>{
  let linkedList=new LinkedList();
  it('instantiate an empty linked list',()=>{
    expect(linkedList.head).toBeNull();
  });
  it(' insert at the linked list',()=>{
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
  });
  it('The head will  point to the first node ',()=>{
    expect(linkedList.head.value).toEqual(1);
  });
  it(' insert more than one  node at the ',()=>{
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.value).toEqual(3);
    // expect(linkedList.head.next.value).toEqual(3);
   
  });
  it('check the values insude the linked list',()=>{
    expect(linkedList.includes(3)).toBeTruthy();
    expect(linkedList.includes(4)).toBeFalsy();
  });
  it(' return the data in linked list  it should equal like taht',()=>{
    let newLinkedList=new LinkedList();
    expect(linkedList.toString()).toEqual('{3} -> {null}');
    expect(newLinkedList.toString()).toEqual('{null}');
  });
  it('Can successfully insert a node before the first node of a linked list', ()=> {
    linkedList.insertBefore(3,4);
    //console.log('ssssssssss-------->'+linkedList)
    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.toString()).toEqual('{3} -> {null}');
  
  });

  it('Can successfully insert after a node in the middle of the linked list', ()=> {
    linkedList.insertAfter(3, 7);
    console.log('dddddd-------->'+ linkedList)
    expect(linkedList.toString()).toEqual('{3} -> {7} -> {null}');

  });
  it('Can successfully insert a node after the last node of the linked list', ()=> {
    linkedList.insertAfter(1, 0);
    expect(linkedList.toString()).toEqual('{3} -> {7} -> {null}');

  });
  

  
});

// const linkedList = require('../linked-List');

// describe('Linked List', () => {
//   it('can create empty linked list', () => {
//     const link = new linkedList();
//     expect(link.head).tobeNull();
//   });
//   ///// insertAtHead()
//   it('can properly insert at the head', () => {
//     const link = new linkedList();
//     link.insert(10);
//     expect(link.head.value).toEqual(10);
//   });
//   it('head points to next properly', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     expect(link.head.next.value).toEqual(20);
//   });
//   it('can insert multiple nodes into the linked list', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     expect(link.head.value).toEqual(10);
//     expect(link.head.next.value).toEqual(20);
//     expect(link.head.next.next.value).toEqual(30);
//   });
//   ///// includes()
//   it('returns true when finding a value within the linked list', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     const includes = link.includes(20);
//     expect(includes).toEqual(true);
//   });
//   it('returns false when value does not exist in linked list', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     const includes = link.includes(40);
//     expect(includes).toEqual(false);
//   });
//   ///// toString()
//   it('can properly return a collection of all the values in the linked list', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     const toString = link.toString();
//     expect(toString).toEqual(`{10} -> {20} -> {30} -> null`);
//   });

//   ///// append()
//   it('can append() at the tail', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     link.append(40);
//     const tostring = link.toString();
//     expect(tostring).toEqual(`{10} -> {20} -> {30} -> {40} -> null`);
//   });
//   ///// insertBefore()
//   it('can insertBefore() the head', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     link.insertBefore(10, 1);
//     const tostring = link.toString();
//     expect(tostring).toEqual(`{1} -> {10} -> {20} -> {30} -> null`);
//   });
//   it('can insertBefore() a value in the middle', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     link.insertBefore(30, 25);
//     const tostring = link.toString();
//     expect(tostring).toEqual(`{10} -> {20} -> {25} -> {30} -> null`);
//   });
//   it('can insertBefore() null, same as append', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     link.insertBefore(null, 40);
//     const tostring = link.toString();
//     expect(tostring).toEqual(`{10} -> {20} -> {30} -> {40} -> null`);
//   });
//   it('insertBefore() can return Exception if value does not exist', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     const exception = link.insertBefore(50, 40);
//     const tostring = link.toString();
//     expect(tostring).toEqual(`{10} -> {20} -> {30} -> null`);
//     expect(exception).toEqual('Exception');
//   });
//   ///// insertAfter()
//   it('insertAfter() null can return Exception', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     const exception = link.insertAfter(null, 40);
//     const tostring = link.toString();
//     expect(tostring).toEqual(`{10} -> {20} -> {30} -> null`);
//     expect(exception).toEqual('Exception');
//   });
//   it('can insertAfter() the tail, same as append', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     link.insertAfter(30, 40);
//     const tostring = link.toString();
//     expect(tostring).toEqual(`{10} -> {20} -> {30} -> {40} -> null`);
//   });
//   it('can insertAfter() a value in the middle', () => {
//     const link = linkedList.fromValues(10, 20, 30);
//     link.insertAfter(20, 25);
//     const tostring = link.toString();
//     expect(tostring).toEqual(`{10} -> {20} -> {25} -> {30} -> null`);
//   });
  
// });