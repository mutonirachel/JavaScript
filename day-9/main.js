// Function

// Function declaraction

function functionName() {
    //  code 
    }

// Function Calling

let names = "Alice";
function showName() {
    console.log(names);
}
showName(); // -> Alice


// Parameters : treated inside a function as local variable

function getElement(elements, index) {
     return elements[index];
     }


     // Arguments

     let result = add(5, 7);
     console.log(result); // -> 12

// Function program

let temperatures;
let sum;
let meanTemp;
function getMeanTemp() {
    sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];   
    }
    meanTemp = sum / temperatures.length;
}

temperatures = [14, 15, 28, 30, 45];

getMeanTemp();

console.log(`Mean Temperature : ${meanTemp}`);

// Shadowing in function

function add(first, second) {
     return first + second;
     }
     let first = 10, second = 20, third = 40, fourth = 80;
     console.log(add(first, second)); // -> 30
     console.log(add(second, third)); // -> 60
     console.log(add(third, fourth)); // -> 120


     let a = 100, b = 200, c = 300;
 function test(a) {
      let b = 10;
      console.log(a); // parameter a
      console.log(b); // local variable b
      console.log(c); // global variable c
 }
 test(1);   // -> 1

 console.log(a); // -> 100
 console.log(b); // -> 200
 console.log(c); // -> 300

 // Parameter validation

 function getMeanTemp(temperatures) {
          if (!(temperatures instanceof Array)) {
           return NaN;
          }
          let sum = 0;
          for (let i = 0; i < temperatures.length; i++) {
           sum += temperatures[i];
          }
          return sum / temperatures.length;
     }
     console.log(getMeanTemp(10)); // -> NaN
     console.log(getMeanTemp([10, 30])); // -> 20

     // Temperature by entering values


let temperature = [];
let numT;
let sm;
let meanTem;

function getTemp() {
    numT = Number(prompt("How many temperatures do you want to enter:", numT));
    for (let i = 0; i < numT; i++) {
        temperature[i] = Number(prompt(`Enter Temperature ${i}: `));
        
    }
}

function getMeanTem() {
    sm = 0;
    for (let i = 0; i < temperature.length; i++) {
        sm += temperature[i];   
    }
    meanTem = sm / temperature.length;
}


getTemp();
getMeanTem();

console.log(`Mean Temperature : ${meanTem}`);
