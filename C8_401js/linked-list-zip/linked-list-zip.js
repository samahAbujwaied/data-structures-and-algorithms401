'use strict';
const LinkedList = require('../LinkedList')

const zipList=(linkedlist1, linkedlist2) =>{
  if (linkedlist1.length === 0 || linkedlist2.length === 0 ) {
    return 'Exception';
  }
  let cur1 = linkedlist1.head;
  let cur2 = linkedlist2.head;

  let linkedlist1Length = linkedlist1.length;
  let linkedlist2Length = linkedlist2.length;

  while (cur1 && cur2.next){
    linkedlist1.insertAfter(cur1.value,cur2.value);

    cur1 = cur1.next.next;
    cur2 = cur2.next;
  }
  if (linkedlist1Length === linkedlist2Length || (linkedlist1Length < linkedlist2Length)){
    linkedlist1.append (cur2.value);
  } else if (linkedlist1Length > linkedlist2Length){
    linkedlist1.insertAfter (cur1.value,cur2.value);
  }
  return linkedlist1;
}

const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);
list1.append(3);
list1.append(4);
console.log(list1.toString());
const list2= new LinkedList();
list2.append(5);
list2.append(6);
list2.append(7);
list2.append(8);
list2.append(9);
list2.append(6);
list2.append(7);
list2.append(8);
list2.append(9);
console.log(list2.toString());
const list3 = zipList(list1,list2)
console.log(list3.toString());
module.exports = zipList;
