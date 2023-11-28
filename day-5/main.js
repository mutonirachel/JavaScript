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





