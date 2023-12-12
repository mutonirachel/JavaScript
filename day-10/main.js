// OBJECT 

let fec = {
    name: 'Juru',
    age: 18,
    gender: 'Female',
    graduate: false
};

console.log(fec.name);

// Bank System that allows people who are above or equal to 18

let age = Number(prompt("Enter your age here: "));

function checkAge(age) {
    if (age >= 18) {
        alert("Welcome!!!");
    }
    else{
        alert("You're not allowed");
    }
}

checkAge(age);


// Balance, deposit, redraw, value, number
// A Loop is used to repeat a specific block of code a over and over. 
// There are two main types of loops, for loops and while loops.

for (let i = 0; i <= 10; i++) {
    console.log(i);   // =>  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    
}

// Name lenght

let fName = prompt("enter your name: ");
for (let i = 0; i < fName.length; i++) {
    if (fName.length <= 5) {
       console.log("Short");
    }
    else{
        console.log("Long");
    }
}

// set time

function greet() {
    console.log("Hi, Rachel!");
  }
  setTimeout(greet, 2000);

  // set interval 

  let count = 0;
  function increment() {
  count++;
  console.log(count);
}
setInterval(increment, 1000);

// Events

