'use strict';

const quickSort= require('../index');

describe('Quick Sort', ()=>{
   

    it('send array to quick Sort function', ()=> {   
        let array = [8,4,23,42,16,15];
        let result = [ 4, 8, 15, 16, 23, 42 ];
        expect(quickSort(array, 0, array.length - 1)).toEqual(result);
    });

 
    });

