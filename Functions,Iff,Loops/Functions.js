 function myFunction() {
       console.log('hello world, this is my first function');
 }
 const myVar = 20;
 console.log(typeof (myFunction))
 myFunction();

 //declare and call function immediately

 (function anotherFunction(){
       console.log('hello');
 })();


//parameters and arguments
function Function(someNumber, someString){ //parameter
      console.log(someNumber);
      console.log(someString);
}
Function(20, 'string'); //this is argument to give value to the parameter
//parameter is only wihtin the function, and not Global

//another way to write a function

function otherWay(){
      console.log('something');
}
//anonymous function
const anotherFunction = function (){
      console.log('another thing');

}
otherWay();
console.log(typeof(anotherFunction));

//Arrow function -  most preferrable 
const arrowFunction = () => {
      console.log('i am an arrow function');
}
arrowFunction();

const result = () => 'askjdas';{
      console.log(result());
}

const thisFunction = () => {
      console.log('something');

}

const returnFunction = () =>{
      const a = 20;
      return a < 30; //true
}
const results = returnFunction();
console.log(results);

//after return value
const improperReturnFunction = () => {
      let thisNumber;
      return thisNumber = 20;
      thisNumber = 50; //cannot be accessed 
}
console.log(improperReturnFunction());

//global Variable and return values
const Global = 20;

let aFunction = () => {
      if (Global < 50) {
            return 'return the function early';
      }

      return 40;
}
console.log(aFunction());

//Objects and Functions together
function oFunction() {
      return 20;
}
const aliasVariable = oFunction;
console.log(aliasVariable());

const myObj = {
      prop1: 50,
      prop2: oFunction
}

console.log(myObj.prop2());

//Built-in functions in JS
//tutorialspoint.com/javascript

const myString = 'sheen';
myString.replace('h', 'k');
console.log(myString);

const newName = myString.replace('h', 'k');
console.log(newName)

//example
const upper = myString.toUpperCase();
console.log(upper);

let str = 'upper case';
const split = str.toUpperCase().split(" ");
console.log(split);

split.indexOf('CASE');

const step1 = str.toUpperCase();
const step2 = step1.split(" ");
const step3 = step2.indexOf("CASE");

console.log(step1);
console.log(step2);
console.log(step3);