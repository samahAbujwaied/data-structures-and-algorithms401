'use strict';

const Stack = require ('./stack');
function bracket(string) {
    if (!string) return false;

    let bracketsArray = [];
     console.log('string--->',string);
    let split = string.split('');
    console.log('split',split);
    for (let i = 0; i < split.length; i++) {
        if (split[i] === '(') bracketsArray.push(1);
        if (split[i] === ')') bracketsArray.push(-1);
        if (split[i] === '{') bracketsArray.push(2);
        if (split[i] === '}') bracketsArray.push(-2);
        if (split[i] === '[') bracketsArray.push(3);
        if (split[i] === ']') bracketsArray.push(-3);
    }
    if (bracketsArray.length <= 1) return false;
    if (bracketsArray[0] < 0) return false;

    const stack = new Stack();

    for (let i = 0; i <  bracketsArray.length; i++) {
        let bracket = bracketsArray.shift();
        // console.log('before', stack.top)
        if (!stack.top) {
            stack.push(bracket);
        } else if (bracket > 0) {
            stack.push(bracket);
        } else if ((bracket * -1) === stack.top.value) { 
            stack.pop();
        } else {
            return false;
        }
        // console.log('after', stack.top)
    }
    return true;
}
let x = bracket('{(})');
let y = bracket('}');

console.log(x);
console.log(y);
module.exports = bracket


