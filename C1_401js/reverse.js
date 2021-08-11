'use strict';
let myArr=['A','B','C','D']
let reverseArr=(array)=>{
let newArr=[];
for(let index =array.length-1 ; index>=0; index--){
    newArr.push(array[index]);}
    return(newArr)};
console.log(reverseArr(myArr))