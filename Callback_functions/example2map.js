const myArray = [2, 4, 6, 8]
function myCustomOperationCallback(itemFromArray) {
    return itemFromArray * 2;
}
const newArray = myArray.map(myCustomOperationCallback);
console.log(newArray)

strArray = ['hello', 'world', 'My', 'Name', "is", 'D Hills']

const firstletter = strArray.map(itemFromArray => itemFromArray[1])
console.log(firstletter)