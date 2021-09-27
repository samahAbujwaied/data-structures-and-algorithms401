'use strict'
const uniqueCharacters = require('../hash')
describe('Determine if a string is full of unique characters ', () => {

    it('Determine if a string is full of unique characters with false value', () => {

        expect(uniqueCharacters('The quick brown fox jumps over the lazy dog')).toBeFalsy();   

    })
    
    it('Determine if a string is full of unique characters with true value', () => {

        expect(uniqueCharacters('I love cats')).toBeTruthy();   

    })
    it('Determine if a string is full of unique characters with false value', () => {

        expect(uniqueCharacters('Donald the duck')).toBeFalsy();   

    })
    

})

