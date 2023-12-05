// complex datatypes

// object

 let testObj = {
    nr: 600,
    str: "Rachel",
 };
 console.log(testObj.nr);
 console.log(testObj.str);
 console.log(typeof testObj); // -> object

// creating two users with some info like first name, last name, age and email, not using object

let name1 = "Calvin";
let surname1 = "Hart";
let age1 = 66;
let email1 = "CalvinHart@telecom.us";

let name2 = "Mateus";
let surname2 = "Pinto";
let age2 = 21;
let email2 = "MateusPinto@dayrep.com";

// creating two users with some info like first name, last name, age and email, with object

let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinHart@telecom.us",
};

let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com",
};

// modify and add new property

console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Mateus

console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67
  
console.log(user2.phone); // -> undefined
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557

// delete a property

console.log(user2.phone); // -> 904-399-7557
delete user2.phone;
console.log(user2.phone); // -> undefined

// ARRAY : a complex data type that can be used to store a data collection.

let days = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]);
console.log(days[2]);
console.log(days[5]);

days[0] = "Sunday";
console.log(days[0]);  // Sunday

let emptyArray = [];
console.log(emptyArray); // undefined


// add a new element in the empty array

let animals = [];
console.log(animals[0]);

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]);   // dog
console.log(animals[1]);  // undefined
console.log(animals[2]);  // cat


// array of different datatypes

let values = ["Test", 2, 12.3, false];

// nested arrays

let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James
  
let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

// two users into the users array

let users =[
        {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
        },
        {
        name: "Mateus",
         surname: "Pinto",
         age: 21,
         email: "MateusPinto@dayrep.com"
         }
     ];
     users[2] = {
            name: "Irene",
            surname: "Purnell",
            age: 32,
            email: "IreneHPurnell@rhyta.com"
           
         }

     console.log(users[0].name); // -> Calvin
     console.log(users[1].name); // -> Mateus
     console.log(users[2].name); // -> Irene
     console.log(users[1].age); // -> 21

// Assement 

// Question One

let tickects = {       // The object have three fields
    station: "Rubis Station",
    endStaion: "100km",
    priceTicket: 90000,
}

// display the values of all fields of the ticket on the console

console.log("Station Name:", tickects.station);
console.log("End Station:", tickects.endStaion);
console.log("Tickect Price:", tickects.priceTicket);


// Question Two

let person = {}; // add an empty object

// using dot notation and add name and surname

person.firstName = "Rachel";
person.SurName = "Mutoni";

// display individual fields on the console

console.log(person.firstName);
console.log(person.SurName);

// QUESTION 3

let 























