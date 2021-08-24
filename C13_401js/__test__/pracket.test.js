const bracket  = require('../s-q');

let state1 = '{}';
let state2 = '{}(){}';
let state3 = '()[[Extra Characters]]';
let state4 = '(){}[[]]';
let state5 = '{}{Code}[Fellows](())';
let state6 = '(](';
let state7 = '{';
let state8 = ')';
let state9 = '{}[()]';

describe('Check on bracket ', () => {
    it('all inserting brackect return true', () => {
        expect(bracket(state1)).toEqual(true);
        expect(bracket(state2)).toEqual(true);
        expect(bracket(state3)).toEqual(true);
        expect(bracket(state4)).toEqual(true);
        expect(bracket(state5)).toEqual(true);
        expect(bracket(state9)).toEqual(true);
    });

    it('all inserting brackect return false', () => {
        expect(bracket(state6)).toEqual(false);
        expect(bracket(state7)).toEqual(false);
        expect(bracket(state8)).toEqual(false);
      
    });
});