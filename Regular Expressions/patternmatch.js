//new RegExp and .test()
const emailValidatorRegEx = new RegExp('^.+@.+\..+');
const userInput = 'invalidemail@g'
const  isValid = emailValidatorRegEx.test(userInput);
 console.log(isValid)

 const string1 = 'my favorite food is steak';
 const string2 = 'my favorite thing to do is code';

 console.log(/[A-Za-z0-9]/.test(string1))
 console.log(/[.]/.test(string2)) //represent any char
 console.log(/[\d]/.test(string1)) //numbers
 console.log(/[\s]/.test(string2)) // spaces
 console.log(/[\w]/.test(string1)) //alphanumeric
 console.log(/^/.test(string1))//beginning letter
 console.log(/k$/.test(string1)) //end letter
 console.log(/(code | steak)/.test(string1))

 //quantifiers

 /[a-z]*/ //0 or more
 /[a-z]?/ //0 or 1
 /[a-z]+/ //1 or more

 /[a-z]{2,6}/ 
  
