/* Binary Search Tree */
'use strict'

const Node = require('./node')
  
  class BST {
    constructor() {
      this.root = null;
    }
    add(data) {
      const node = this.root;
      if (node === null) {
        this.root = new Node(data);
        return;
      } else {
        const searchTree = function(node) {
          if (data < node.data) {
            if (node.left === null) {
              node.left = new Node(data);
              return;
            } else if (node.left !== null) {
              return searchTree(node.left);
            }
          } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        };
        return searchTree(node);
      }
    }

    inOrder() {
        if (this.root == null) {
          return null;
        } else {
          var result = new Array();
          function traverseInOrder(node) {       
            node.left && traverseInOrder(node.left);
            result.push(node.data);
            node.right && traverseInOrder(node.right);
          }
          traverseInOrder(this.root);
          return result;
        };
      }
    preOrder() {
      if (this.root == null) {
        return null;
      } else {
        let result = new Array();
        function traversePreOrder(node) {
          result.push(node.data);
          node.left && traversePreOrder(node.left);
          node.right && traversePreOrder(node.right);
        };
        traversePreOrder(this.root);
        return result;
      };
    }
    postOrder() {
      if (this.root == null) {
        return null;
      } else {
        let result = new Array();
        function traversePostOrder(node) {
          node.left && traversePostOrder(node.left);
          node.right && traversePostOrder(node.right);
          result.push(node.data);
        };
        traversePostOrder(this.root);
        return result;
      }
    }


    findMax() {
        let current = this.root;
       
        while (current.right ) {
          current = current.right;
        }
        return current.data;
    
    
  }
  
}
  
  const bst = new BST();
  
  bst.add(9);
  bst.add(4);
  bst.add(17);
  bst.add(3);
  bst.add(6);
  bst.add(22);
  bst.add(5);
  bst.add(7);
  bst.add(20);

  console.log('inOrder: ' + bst.inOrder());
  console.log('preOrder: ' + bst.preOrder());
  console.log('postOrder: ' + bst.postOrder());
  
  console.log('findMax: ' + bst.findMax());
  module.exports=BST