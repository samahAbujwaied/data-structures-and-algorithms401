'use strict';

const BinaryTree = require('../sumtree');
const Node = require('../node');

describe('Sum Tree Tree', ()=>{


    it('Sum Tree happy path', ()=> {
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
        
        let expectedOutput =24;
        let sumTree = new BinaryTree()
       
        expect(sumTree.sumTree(one)).toEqual(expectedOutput);
    });

    it('Sum Tree bad path ', ()=> {
     
        
        let sumTree = new BinaryTree()
        expect(sumTree.sumTree()).toEqual('Sorry there is no root');
    });

    });

