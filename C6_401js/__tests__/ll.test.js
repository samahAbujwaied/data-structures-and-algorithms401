'use strict';
const LinkedList=require('../linked-List');
describe('test on Linked Lists',()=>{
  let linkedList=new LinkedList();
  it(' empty linked list',()=>{
    expect(linkedList.head).toBeNull();
  });
  it(' insert at the linked list',()=>{
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
  });
  it('point on the first node',()=>{
    expect(linkedList.head.value).toEqual(1);
  });
  it('adding more than node ',()=>{
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.value).toEqual(3);
  });
  it('checking for value if it on inside node or not',()=>{
    expect(linkedList.includes(3)).toBeTruthy();
    expect(linkedList.includes(4)).toBeFalsy();
  });
  it('return all the linked list',()=>{
    let newLinkedList=new LinkedList();
    expect(linkedList.toString()).toEqual('{3} -> {null}');
    expect(newLinkedList.toString()).toEqual('{null}');
  });
  it('add node on the first', ()=> {
    linkedList.insertBefore(3,4);
    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.toString()).toEqual('{3} -> {null}');
  
  });
  it('insert after the middle node', ()=> {
    linkedList.insertAfter(3, 7);
    console.log( linkedList)
    expect(linkedList.toString()).toEqual('{3} -> {7} -> {null}');
  });
  it('add node on the end', ()=> {
    linkedList.insertAfter(1, 0);
    expect(linkedList.toString()).toEqual('{3} -> {7} -> {null}');
  });
   
});
