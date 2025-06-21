//#Primitive
//total 7 categories
// call by value
// String, Number, Boolean, null, undefined, symbol, bigint 

const score = 100
const scvalue = 100.0
const islogin = false
const outsidetemp = null
let useremail;
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

const bignumber = 123456789111213n //when use n it becomes bigint

const heroes = ['shaktiman',"doga"];

let myobj = {
    name: "hitesh",
    age: 22,
}

const myfucntion = function(){
    console.log("hello world");
}
console.log(typeof score);
console.log(typeof scvalue);
console.log(typeof islogin);
console.log(typeof outsidetemp);
console.log(typeof useremail);
console.log(typeof id);
console.log(typeof anotherid);
console.log(typeof bignumber);
console.log(typeof heroes);
console.log(typeof myobj);
console.log(typeof myfucntion);


// number
// number
// boolean
// null - object
// undefined
// symbol
// symbol
//bigint
// arrays - object
// object - object
// fucntion - function(we say like object function)




// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


// N0n - Primitive
// Reference type
// array, objects, functions