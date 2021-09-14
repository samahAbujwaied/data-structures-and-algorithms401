'use strict'

function quickSort(array, left, right) {
    //[8,4,23,42,16,15];
    let index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) { 
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
}
function swap(array, leftIndex, rightIndex){
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}


function partition(array, left, right) {
    let  pivot = array[Math.floor((right + left) / 2)], 
        i = left,
        j = right; 
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}


let array = [8,4,23,42,16,15];
let sortedArray = quickSort(array, 0, array.length - 1);
console.log(sortedArray);

module.exports = quickSort;