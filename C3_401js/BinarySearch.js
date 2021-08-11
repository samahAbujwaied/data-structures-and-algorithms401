'use strict'
let binarySearch=(sortedArr,key)=>{
    let idx ;
    for (let index = 0; index < sortedArr.length; index++) {
        if(sortedArr[index]==key) 
        {  idx = index
            return idx}}
    if(typeof idx ==='undefined')
    {
        return -1
    }
}
let array = [1,2,3,4,5];
let key = 5
console.log(`The index of ${key} is ${binarySearch(array,key)}`)