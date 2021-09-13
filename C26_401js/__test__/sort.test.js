'use strict';

const {inserationsort,Reversesorted} = require('../index');

describe('Insertion Sort', ()=>{
   

    it('Insertion Sort from smallest to largest ', ()=> {   
        let array = [ 1, 2, 4, 5, 7, 8 ]
        expect(inserationsort([5, 4, 2, 1, 7, 8])).toEqual(array);
    });

    it('Insertion Sort from largest to  smallest', ()=> {   
        let array = [ 8, 7, 5, 4, 2, 1 ]

        expect(Reversesorted([5, 4, 2, 1, 7, 8])).toEqual(array);
    });
 
    });

