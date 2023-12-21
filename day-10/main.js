// // OBJECT 

// let fec = {
//     name: 'Juru',
//     age: 18,
//     gender: 'Female',
//     graduate: false
// };

// console.log(fec.name);

// // Bank System that allows people who are above or equal to 18

// let age = Number(prompt("Enter your age here: "));

// function checkAge(age) {
//     if (age >= 18) {
//         alert("Welcome!!!");
//     }
//     else{
//         alert("You're not allowed");
//     }
// }

// checkAge(age);


// // Balance, deposit, redraw, value, number
// // A Loop is used to repeat a specific block of code a over and over. 
// // There are two main types of loops, for loops and while loops.

// for (let i = 0; i <= 10; i++) {
//     console.log(i);   // =>  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    
// }

// // Name lenght

// let fName = prompt("enter your name: ");
// for (let i = 0; i < fName.length; i++) {
//     if (fName.length <= 5) {
//        console.log("Short");
//     }
//     else{
//         console.log("Long");
//     }
// }

// // set time

// function greet() {
//     console.log("Hi, Rachel!");
//   }
//   setTimeout(greet, 2000);

//   // set interval 

//   let count = 0;
//   function increment() {
//   count++;
//   console.log(count);
// }
// setInterval(increment, 1000);

// // Events
         
    
        let balance = 12000;
        function redraws() {
            let redraw = Number (prompt("enter amount of money to redraw"));
            if (redraw < balance) {
                balance = balance - redraw;
               alert("After Redraw, balance is "+balance);
            }
            else{
                alert("insuffient balance");
            }
        }
        redraws();

        function deposits() {
            let deposite = Number(prompt("enter amount of money to deposit"));
            if (balance < 10000) {
                balance = balance + deposite;
                alert("After Deposit, balance is "+balance);
            }
        }
        deposits();

        function totalBalance() {
            // balance = balance - redraws + deposits;                                                                                                                                      
            alert("Our total balance is "+balance);
        }

        totalBalance();