'use strict';
const Node = require('./node')
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    sumTree (root) {

        let result = 0;
        const q = [root];
        if(root){
            while (q.length > 0) {
                let cur = q.shift();
                {
                    if(cur.value%2!==0)
                    result+=cur.value; ////result = result+cur.value
                }
               
                if (cur.left)
                    q.push(cur.left)
                if (cur.right)
                    q.push(cur.right)
        
            }
            return result
    
        }
        else return 'Sorry there is no root';
    }
    
}

let one = new Node(8);
let two = new Node(3);
let three = new Node(10);
let four = new Node(1);
let five = new Node(6);
let six = new Node(14);
let seven = new Node(4);
let eight = new Node(7);
let nine = new Node(13);

one.left = two;
one.right = three;
two.left = four;
two.right = five
five.left = seven;
five.right = eight;
three.right = six;
six.left = nine;

let tree = new BinaryTree();
const check = tree.sumTree(one)
console.log(check);
module.exports = BinaryTree;