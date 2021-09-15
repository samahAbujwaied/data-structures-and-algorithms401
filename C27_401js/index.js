'use strict'

function merge(left, right) {
    let sortedArr = []; 
    while (left.length && right.length) {

      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...right];
  } 
function mergeSort(arr) {
    const half =Math.ceil(arr.length / 2) ;
    console.log('half',half);
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.splice(0, half);
    console.log('splice',left);
    const right = arr;
    console.log('righrt',right );
    // console.log(merge(mergeSort(left), mergeSort(right)));
    return merge(mergeSort(left), mergeSort(right));
  }

  console.log('-------------',mergeSort([5,2,4,3,1]));
  
module.exports = mergeSort;