const myBoolean = true; 
const myString = 'sup btch';
const firstNumber = 20;
const secondNumber = 40;
let secondNumber1 = 40; 
secondNumber1 = 80;

const myArray = [(myBoolean), (myString)]; 

const myObject = { 
    firstProperty: myArray, sumProperty: firstNumber + secondNumber1
}
console.log(myObject);
console.log(myObject.sumProperty); 
console.log(myObject.firstProperty[1]); 