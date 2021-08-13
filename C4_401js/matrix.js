let matrixArr = (array)=>{
let sum = 0 ;
let newArr = [];
for (let i = 0; i < array.length; i++) {
    sum=0;
   for (let j= 0; j < array[i].length; j++) {
       sum += array[i][j];     
   }
    newArr.push(sum);
}
return newArr;
}
let array = [[1,2,3],[4,0,1],[2,5,1]]
console.log(matrixArr(array));