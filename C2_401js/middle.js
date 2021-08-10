insertShiftArray=(array , val )=>{
    let newArr = [];
    let midNum = Math.ceil((array.length/2))
    console.log(midNum);
    newArr[midNum]=val;
    for (let index = 0; index < midNum; index++) {
        newArr[index]=array[index];
   
    }
    for (let index = midNum; index < array.length; index++) {
        newArr[index+1]=array[index]
        
    }
    return newArr;
}
console.log(insertShiftArray([1,2,4,5],3));