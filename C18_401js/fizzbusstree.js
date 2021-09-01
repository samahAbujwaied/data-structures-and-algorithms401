'use strict';
const Node = require('./node')
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    fizzBuzzTree(tree) {
        console.log(tree);
        const result =[];
            
                
                   let FBT = (node) => {
                if(tree){  
                  if (node.left) 
                  {  
                      FBT(node.left); }
              
                  if (node.value % 15 === 0) 
                  { node.value = 'FizzBuzz'; 
                    result.push('FizzBuzz')
                }
                  else if (node.value % 5 === 0) {
                       node.value = 'Buzz';
                       result.push('Buzz')
                     }
                  else if (node.value % 3 === 0) {
                       node.value = 'Fizz'; 
                       result.push('Fizz')
                    }
                    else{
                        result.push(node.value) 
                    }

                    if (node.right) { 
                   
                        FBT(node.right); }
                      
                      };
              
                }
               
              
                 
                FBT(tree);
                if(result)
                return result ;
                
            
              };
        
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