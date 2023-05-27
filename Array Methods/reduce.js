const arr = [10, 20, 30, 25, 14]; 

function reducerCallback(sum, arrItem){
    return sum += arrItem;
  } 

const result = arr.reduce(reducerCallback, 0); 
console.log(result)

const avearr = arr.reduce((sum, arrItem) => arrItem, 0) / arr.length 
console.log(avearr)