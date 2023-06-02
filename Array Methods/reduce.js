const arr = [10, 20, 30, 25, 14]; 

function reducerCallback(sum, arrItem){
    return sum += arrItem;
  } 

const result = arr.reduce(reducerCallback, 0); 
console.log(result)

const avearr = arr.reduce((sum, arrItem) => sum + arrItem, 0) / arr.length;
console.log(avearr);


const array = [1, 3, 5, 6, 7];
function reduceCallback(product, arrayItem){
  return product += arrayItem;

}

const averResult = array.reduce(reduceCallback,0);
console.log(averResult);