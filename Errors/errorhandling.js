try {
    var nNum = 2;
    num.toUpperCase();
} catch (error) {
    console.log(error instanceof TypeError)
    console.log(error.message);
}

//Nan, null, undefined

const myString = 'some string';
Number('30')
Number(myString) //Nan

//null

let num = null;


if (num) {
    console.log('this will not be reached');
} else {
    console.log('this will be reached');
}

//undefined
let myvar;
console.log(myvar)

if (myvar) {
    console.log('this will not be reached');
} else {
    console.log('falsy myvar');
}
