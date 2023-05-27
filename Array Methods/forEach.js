arr = [1, 2, 3];
arr.forEach(arrItem => {
    console.log(arrItem)
})
//displaying the value and the index
arr.forEach((arrItem, index) => {
    console.log(arrItem);
  console.log(index);
})

const myCOlors = ['blue', 'red', 'purple', 'orange', 'green']; 
myCOlors.forEach(colorItem => {
    if (colorItem === 'orange'){
    orangeExists = true;
  }
}) 
console.log(orangeExists)
