const Stack  = require('../index');


describe('get max number from a Stack ', () => {
    it('max number after push on array ', () => {
        const stack = new Stack();
        stack.push(234);
        stack.push(453);
        stack.push(6534);
        stack.push(123);
        expect(stack.getMax()).toEqual(6534);
    });
    it('max number befor push on array ', () => {
        const stack = new Stack();
       
        expect(stack.getMax()).toEqual('Array is empty....!');
    });

});