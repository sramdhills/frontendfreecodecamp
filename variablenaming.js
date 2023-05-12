const yourfirstVariable = 10; //recommended
const your_first_cariable = 10;
const YOUR_FIRST_VARIABLE = 10;
const yourfirstvariable = 10;
const YourfirstVariable = 10;

//camel case - YourfirstVariable
//snake case - with underscores

/*no number starting
no spaces
*/
//style guide 
//implicit coercion  and explicit coercion
 const number1 = '10';
 const number2 = 20;
 typeof number1
 typeof number2
 number1 + number2
 Number(number1) + number2
 
 //arrays
 const firstArray = [10, 20, 30, 40];
 const secondArray = [10, 'a string', {prop: 'asdad'}, [1, 2]]; 
 console.log(firstArray[0]); 
 console.log(secondArray[3]);
 console.log(secondArray[3][0]); 

 //objects - very important

 const objectVariable = { prop1: 20, prop2: 50}; 

 objectVariable.prop1 
 const nnestedObject = {
    layer1: {
        layer2: {
            layer3: { 
                targetValue: 20
            }
        }
    }
}
nnestedObject.layer1.layer2.layer3;
objectVariable['prop1'];

const functionContainerVariable = function() {
    return 20;
} 
functionContainerVariable(); 