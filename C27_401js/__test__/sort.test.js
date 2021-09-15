'use strict';

const mergeSort= require('../index');

describe('Merge Sort', ()=>{
   

    it('send array to merge Sort function', ()=> {   
        let array = [8,4,23,42,16,15];
        let result = [ 4, 8, 15, 16, 23, 42 ];
        expect(mergeSort(array)).toEqual(result);
    });

 
    });

