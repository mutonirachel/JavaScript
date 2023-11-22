// Variables inJavaScript

// console in Js simply displays information in your JS and test your code 

console.log(1); 

// declare and assign variables in JS

let test;  //declare a variable using "let"
test = 1;  // assign / initialize a variable (initializing a variable is a process of assigning a value to it)
console.log(test);

// You can also assign a value to a variable directly when you create it.
let text = 1;
console.log(text);

// wrap up with some questions, 1. undefined 

let number;
console.log(number);

// 2. 0 2

let numb = 0;
console.log(numb);
numb = 2;
console.log(numb);

// 3 you can't re-declare the same variale, not like this:

let numbr = 1;
let numbr = 2;
console.log(numbr);

// but like this: (assign a value to a variable on line 39)

let num = 1;
num= 2;
console.log(num);

// Assign the value of another variable

let numOne = 5;
let numTwo = numOne;
console.log(numTwo);

// You can also create a variable with the "let" keyword.

let tem = 5;

// You can also create a variable with the "const" keyword.

const temp = 5;

// The difference between the two is that you can not assign a new value to a variable that was created with const.


// Try it out. Here, we attempt to assign a new value to a variable that was created with const.

const tempt = 1;
tempt = 2; // output: TypeError: Assignment to constant variable.

// You also cannot declare a const-variable without assigning a value to it directly. See what happens if you try anyway:

const temprt;  // output: SyntaxError: Missing initializer in const declaration

// But, why should you use const instead of let?
// It is considered good practice to use const for variables whoose value will never change.


const pi = 3.14159; // For example, if you want to store the number pi you would use const to store it because pi never changes.

// Doing so can prevent your code from behaving unexpectedly.


// you can't do this:

console.log(num);
const num = 5;

// but like this:

const numerical = 5;
console.log(numerical);
