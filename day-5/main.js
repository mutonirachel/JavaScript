// MODULE ABOUT Declaring Variables
// One of the basic differences in the use of var and let is that let prevents us from declaring another variable with the same name (an error is generated). Using var allows you to re-declare a variable, which can potentially lead to errors in the program execution.


var height;
console.log(height);  // undefined
console.log(weight); // Uncaught ReferenceError: weight is not defined

let height;
console.log(height); // undefined


var height;
var height;
console.log(height);  // undefined


let height;
let height; // Uncaught SyntaxErroe: Identifer 'height' has already been declared
console.log(height);

// Intializing variables

let height = 180;
let anotherHeight = height;
let weight;
console.log(height); // 180
console.log(anotherHeight); // 180
weight = 70;
console.log(weight); // 70


// By the way, pay attention to one thing. If you specify a variable name in console.log, the interpreter recognizes it and displays its value. If you put the same name in quotation marks, it will be treated as plain text, and displayed as such.

let height = 180;
console.log(height); // 180
console.log("height"); // height

// Declarations and strict mode 

height = 180;
console.log(height); // 180

// Let's modify our example by using strict:
// We use it when we want to force the interpreter to behave according to modern JavaScript standards.

"use strict";

height = 180;   // Uncaught ReferenceError: height is not defined
console.log(height);

// changing variable values 

let steps = 100;
console.log(steps); // 100
steps = 120;  
console.log(steps);    // 120
steps = steps + 200;
console.log(steps);  // 320

// declare and initialize variables of different types (data types)

let greeting = "Hello";  // the greeting variable is initiated with a value of the string type
let counter = 100;  // the counter variable is initiated with a value of the number type

console.log(greeting);  // Hello
greeting = 1;
console.log(greeting);  // 1

// JavaScript allows us to easily replace the greeting variable with a value whose type is different from the one originally stored there.
// allows us to change the types of values kept in a variable, but it also performs their implicit conversion if necessary 


let greetings = "Hello!";  
let counters = 100;

greetings = greetings + counter;
console.log(greetings);  // Hello!100


// CONSTANTS

const texts; // Uncaught SyntaxError: Missing initializer in const declaration
texts = "Hello!";


const text = "Hello";  // it's correct because it has declaration and initialiations

// again this is wrong
// a change in the constant is impossible.
//  declaration is correct, but we try to modify the value stored in the constant.

const devclass = "Front-End";
devclass = "Back-End";  // Uncaught  TypeError:  Assignment  to  constant  variable.


// SCOPE

let cont;
console.log(cont);  // undefined
{
    cont = 1;
    console.log(cont);  // 1
}
cont = cont + 1;
console.log(cont);  // 2

// Program blocks can be nested, that is, we can create one block inside of another one.

let contr;
console.log(contr);  // undefined
{
    cont = 1;
    {
        console.log(contr);  // 1
    }
}
cont = cont + 1;
console.log(contr);  // 2

