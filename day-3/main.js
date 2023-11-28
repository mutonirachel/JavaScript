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

// STRICT EQUALITY AND STRICT INEQUALITY

// STRICT EQUALITY : === 
// Checks whether its two operands are equal, returning a Boolean result.

console.log(1 === 1); // Expected output : true
console.log('hello' === 'hello'); // Expected output: true
console.log('1' === 1); // Expected output: false
console.log(0 === false); // Expected output: false

// Comparing objects 

const object1 = {
    key: "value",
};

const object2 = {
    key: "value",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true


// STRICT INEQUALITY : !==
// an inequality where the inequality symbol is either (greater than) or. (less than). That is, a strict inequality is an inequality which has no equality conditions.

console.log(1 !== 1); // false
console.log('hello' !== 'hello'); // false
console.log('1' !== 1); // true
console.log(0 !== false); // true


// LOGICAL OPERATORS : AND(&&), OR(||), and NOT(!)


// AND(&&)

6 > 4 && 2 <= 14 // true
// 6 > 4 and 2 <= 14 : true


// TRUTH TABLE FOR AND (&&) : It is only true when all operands/ expressions are equal/ true
// x	    y	    x and y
// false	false	false
// false	true	false
// true	    false	false
// true	    true	true


// TRUTH TABLE FOR OR (||) : It is true when al least one operand/ expression is true
// x	    y	    x or y
// false	false	false
// false	true	true
// true	    false	true
// true	    true	true


// TRUTH TABLE FOR NOT (!) : It does reverse/ opposite
// x	    not x
// false	true
// true	    false

// EXAMPLES














