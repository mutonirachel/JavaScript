// Boolean in JS
// But sometimes you might want to store information that cannot be represented by a number.
// For example, the product for which we already have a price could sometimes be on sale and sometimes not.
// To store this kind of information we can use JavaScript Booleans, like so:

const isOnSale = true;  // The value true indicates that the product is on sale.

// Booleans can have only two values: true and false

const isOnSaleNow = false; // If the product is not on sale, we assign false:


// The same way we can reassign variables with numbers, we can also reassign variables with Booleans. Let's try it:

let isOnSalesNow = true;
console.log(isOnSalesNow);
isOnSalesNow = false; 
console.log(isOnSalesNow);

// Assign boolean to a variable
// Here, we declare the variable isTrue. But, it has no value yet. Assign a boolean value to it and run the code.

let isTrue; 
isTrue = true;
console.log(isTrue);

// Truthy and Falsy in JvaScript
// This lesson explains the concept of truthy and falsy values in JavaScript, and how it relates to JavaScript Booleans.
// sometimes we want to work with other data types, such as numbers, in a Boolean context.
// Actually, every single value in JavaScript can be transformed to a boolean value.
// To do so, we can make use of the Boolean() function. Let's try it:

console.log(Boolean(100)); // Here, we forced the value 100 to be converted to a Boolean, and the result is true.

// But, why does 100 become true? That's where the concepts of truthy and falsy come in.
// Every single value in JavaScript is considered either truthy or falsy. Truthy values result in the value true when coerced into a Boolean value. Falsy values result in the value false.

// All of the following values are falsy:

false
null
undefined
0
-0
NaN
// An empty string ('')

// It is important to know that all JavaScript values that are not in this list above are truthy.

console.log(Boolean(100));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-5));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NAN));


let test;





