// STATEMENTS

// IF STATEMENT 
// 1. to check if the temperature is very hot, hot, cold or very cold

let temp = 75;

if(temp >= 100){
    console.log("The temperature is very hot");
}
else if(temp <= 99 && temp >= 70){
    console.log("The temperature is hot");
}
else if(temp <= 69 && temp >= 40){
    console.log("The temperature is okay");
}
else if(temp < 39 && temp >= 20){
    console.log("The temperature is cold");
}
else{
    console.log("The temperature is very cold");
}

// 2. To check if the length of my name is equal to 5
let firstName = "Rachel";
let secondName = "Mutoni";

if(firstName.length >= 5){
    console.log("The name is long");
}
else{
    console.log("The name is short");
}


// 3. To check if the length of my name is equal to 5 with AND(&&) OPERATOR

let val1 = "Ra";
let val2 = "Mu";

if(val1.length <= 5 && val2.length <= 5){
    console.log("it is long");
}

else{
    console.log("it is short");
}