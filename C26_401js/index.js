'use strict'

function inserationsort(arr) {
    for (let x = 1; x < arr.length; x++) {
        for (let y = x; y > 0; y--) {
            if (arr[y] < arr[y - 1]) {
                const swip = arr[y];
                arr[y] = arr[y - 1];
                arr[y - 1] = swip;
            } else {
                break;
            }
        }
    }
    return arr;
}

function Reversesorted(arr) {
    for (let x = 1; x < arr.length; x++) {
        for (let y = x; y > 0; y--) {
            if (arr[y] > arr[y - 1]) {
                const swip = arr[y];
                arr[y] = arr[y - 1];
                arr[y - 1] = swip;
            } else {
                break;
            }
        }
    }
    return arr;
}

console.log(inserationsort([5, 4, 2, 1, 7, 8]));
console.log(Reversesorted([5, 4, 2, 1, 7, 8]));

module.exports= {inserationsort,Reversesorted}