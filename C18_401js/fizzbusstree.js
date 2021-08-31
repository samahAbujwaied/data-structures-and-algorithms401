'use strict';
const Node = require('./node')
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    fizzBuzzTree (root) {

        const result = [];
        const q = [root];
        if(root){
            while (q.length > 0) {
                let cur = q.shift();
                {
                    if( cur.value%15===0)
                    result.push('fizzBuzz'); 
                    else if(cur.value%5==0)
                    result.push('Buzz');
                    else if (cur.value%3==0 ){
                        result.push('fizz')
                    }
                    else { result.push(cur.value)}
    
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

let one = new Node(2);
let two = new Node(7);
let three = new Node(5);
let four = new Node(2);
let five = new Node(6);
let six = new Node(9);
let seven = new Node(5);
let eight = new Node(15);
let nine = new Node(4);

one.left = two;
one.right = three;
two.left = four;
two.right = five
five.left = seven;
five.right = eight;
three.right = six;
six.left = nine;

let tree = new BinaryTree();
const check = tree.fizzBuzzTree(one)
console.log(check);
module.exports = {BinaryTree};