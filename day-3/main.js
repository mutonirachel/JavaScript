// OPERATORS
// Introduction to JavaScript Comparison Operators
// In this lesson you will learn how to compare values using comparison operators in JavaScript.

// Now, we will learn how to compare these variables and their values with each other. We can do so by using comparison operators.

// The first operator we explore is the Equal to (==) operator. It checks if two values are equal. For example:

2 == 2  // true (COMPARISION OPERATORS = EQUAL)

const priceOne = 5;
const priceTwo = 10;
console.log(priceOne == priceTwo);   // false

// Here, we used the Equal to (==) operator to check if the values of priceOne and priceTwo are equal.

// Comparison operators always return a boolean value. In this case we got false because priceOne and priceTwo are not equal.

// Now, priceOne and priceTwo have the same value. Let's see what the output will be:

const priceOnee = 10;
const priceTwoo = 10;
console.log(priceOnee == priceTwoo);  // true

// The second operator we explore is the Not Equal to (!=) operator. 
//It checks if two values are not equal. For example:

2 != 2  // false (COMPARISION OPERATORS - NOT EQUAL)

const priceOneee = 5;
const priceTwooo = 10;
console.log(priceOneee != priceTwooo);   // true (Now, we got true because priceOne and priceTwo are indeed not equal.)

console.log(10 == 10);   // true
console.log(10 != 11);   // true
console.log(false == false);   // true

// Introduction to JavaScript Comparison Operators II
// We already know how to use the Equal To and Not Equal To operators. Let's look at some more comparison operators.

// The Greater than (>) operator checks if the left value is greater than the right value. For example:

2 > 1 // checks if 2 is greater than 1 (COMPARISION OPERATORS - GREATER THAN)

const priceOneeee = 5 ;
const priceTwoooo = 10;

console.log(priceOneeee > priceTwoooo);  // false 
console.log(priceTwoooo > priceOneeee);  // true 

// The Less than (<) operator checks if the left value is less than the right value. For example:

2 < 1  // checks if 2 is greater than 1 (COMPARISION OPERATORS - GREATER THAN)

const priceThree = 5;
const priceFour = 10;

console.log(priceThree < priceFour);  // true
console.log(priceFour < priceThree);  // false

// Similar to the operators above, there are also the Less than or equal (<=) and Greater than or equal (>=) operators. For example:

2 <= 1  // checks if 2 is less than or equal 1 : false
2 >= 1  // checks if 2 is greater than or equal 1 : true

const priceFive = 10;
const priceSix = 15;
const priceSeven = 10;

console.log(priceFive >= priceSix);    // false
console.log(priceFive >= priceSeven);   // true 

console.log(priceFive <= priceSix);    //  true
console.log(priceFive <= priceSeven);   // true

















