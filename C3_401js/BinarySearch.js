'use strict'
let binarySearch=(sortedArr,key)=>{
    // let idx ;
    let start = 0;
    let end = sortedArr.length-1;
    // for (let index = 0; index < sortedArr.length; index++) {
    //     if(sortedArr[index]==key) 
    //     {  idx = index
    //         return idx}}
    // if(typeof idx ==='undefined')
    // {
    //     return -1
    // }
    while (start <= end) {
        let mid = Math.ceil((start + end) / 2);
        if (sortedArr[mid] === key) {
            return mid;
        } else if (sortedArr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
let array = [1,2,3,4,5];
let key = 4
console.log(`The index of ${key} is ${binarySearch(array,key)}`)
