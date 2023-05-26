const myString  = 'My Dog jumped on the bed. My dog is a bad Dog'; 
const newString = myString.replaceAll('Dog','Cat'); 
const correctString = myString.replaceAll(/[Dd]{1}og/g, 'cat');

console.log(newString);
console.log(correctString);
