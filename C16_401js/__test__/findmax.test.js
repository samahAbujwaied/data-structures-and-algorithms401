"use strict";

const BinaryTree = require("../binaryTree");

describe("Binary Search Tree", () => {


  it("Can successfully return a collection from a preorder traversal",()=>{
    let result=[9,4,3,6,5,7,17,22,20]
    let bst=new BinaryTree();
    bst.add(9);
    bst.add(4);
    bst.add(17);
    bst.add(3);
    bst.add(6);
    bst.add(22);
    bst.add(5);
    bst.add(7);
    bst.add(20);
    expect(bst.preOrder()).toEqual(result);
  })
  it("Can successfully return a collection from a inorder traversal",()=>{
    let result=[ 3,4,5,6,7,9,17,20,22]
    let bst=new BinaryTree();
    bst.add(9);
    bst.add(4);
    bst.add(17);
    bst.add(3);
    bst.add(6);
    bst.add(22);
    bst.add(5);
    bst.add(7);
    bst.add(20);
    expect(bst.inOrder()).toEqual(result);
  })

  it("Can successfully return a collection from a postorder traversal",()=>{
    let result=[3,5,7,6,4,20,22,17,9]
    let bst=new BinaryTree();
    bst.add(9);
    bst.add(4);
    bst.add(17);
    bst.add(3);
    bst.add(6);
    bst.add(22);
    bst.add(5);
    bst.add(7);
    bst.add(20);
    expect(bst.postOrder()).toEqual(result);
  })

  it("find Max number happy path ",()=>{
    let bst=new BinaryTree();
    bst.add(9);
    bst.add(4);
    bst.add(17);
    bst.add(3);
    bst.add(6);
    bst.add(22);
    bst.add(5);
    bst.add(7);
    bst.add(20);
    expect(bst.findMax()).toEqual(22);
  })

  it("find Max number happy path ",()=>{
    let bst=new BinaryTree();
    bst.add(9);
    bst.add(4);
    bst.add(17);
    bst.add(3);
    bst.add(6);
    bst.add(22);
    bst.add(5);
    bst.add(7);
    bst.add(50);
    expect(bst.findMax()).toEqual(50);
  })
  
});