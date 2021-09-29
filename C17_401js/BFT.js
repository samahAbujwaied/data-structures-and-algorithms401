'use strict';
const Node = require('./node')
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }


}
// [ 2, 7, 5, 2, 6, 9, 5, 11, 4 ]
//[2,7,5,2,6,9,5,11,4]
const BF = (root) => {
    const result = [];
    console.log('in');
    const q = [root];
    console.log('======', q);
    if(root){
     console.log('in if');
        while (q.length > 0) {
            console.log('lennn', q.length);
            let cur = q.shift();
            console.log('cur value ', cur);
            result.push(cur.value)
            if (cur.left)
                q.push(cur.left)
            if (cur.right)
                q.push(cur.right)
    
        }
        console.log('result', result);
        return result

    }
    else return 'Sorry there is no root';
}

let one = new Node(2);
let two = new Node(7);
let three = new Node(5);
let four = new Node(2);
let five = new Node(6);
let six = new Node(9);
let seven = new Node(5);
let eight = new Node(11);
let nine = new Node(4);

one.left = two;
one.right = three;
two.left = four;
two.right = five
five.left = seven;
five.right = eight;
three.right = six;
six.left = nine;

let check = BF(one)
console.log(check);
module.exports = {BinaryTree, BF };