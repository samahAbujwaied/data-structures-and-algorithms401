'use strict';

const { BinaryTree} = require('../fizzbusstree');
const Node = require('../node');

describe('Fizz Buzz Tree', ()=>{
    let expectedOutput =[ 'fizz', 7, 'Buzz', 2, 'fizz', 'fizz', 'Buzz', 'fizzBuzz', 4 ]
    let tree = new BinaryTree();
        let one = new Node(3);
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
    it('Fizz Buzz Tree happy path', ()=> {   
       
        expect(tree.fizzBuzzTree(one)).toEqual(expectedOutput);
    });

    it('If the value is divisible by 3, replace the value with “Fizz” ', ()=> {
        let divthree = expectedOutput[0];
        expect(tree.fizzBuzzTree(one)[0]).toEqual(divthree);
    });
    it('If the value is divisible by 5, replace the value with “Buzz” ', ()=> {
        let divfive = expectedOutput[2];
        expect(tree.fizzBuzzTree(one)[2]).toEqual(divfive);
    });
    it('If the value is divisible by 3 and 5, replace the value with “FizzBuzz” ', ()=> {
        let divfifteen = expectedOutput[7];
        expect(tree.fizzBuzzTree(one)[7]).toEqual(divfifteen);
    });
    it('If the value is not divisible by 3 or 5, simply turn the number into a String. ', ()=> {
        let value = expectedOutput[1];
        expect(tree.fizzBuzzTree(one)[1]).toEqual(value);
    });
    it('Fizz Buzz Tree sad path', ()=> {   
       
        expect(tree.fizzBuzzTree()).toEqual('Sorry there is no root');
    });
    });

