// JavaScript Lab 1 – Problem Solving
// Write all your code below each prompt

// 1. Sandwich Calculator
// Each guest gets 2 sandwiches. You have 12 guests.
// Calculate total sandwiches needed.

let guests = 12;
let sandwichesPerGuest = 2;
let totalSandwiches = guests * sandwichesPerGuest;

console.log("The total amount of sandwiches needed is " + totalSandwiches)


// 2. Movie Budget
// You have $40. A movie ticket costs $9.50.
// How many full tickets can you buy, and what's the leftover amount?

let budget = 40;
let ticketPrice = 9.50;

let fullTickets = Math.floor(budget / ticketPrice);
let leftover = budget % ticketPrice

console. log("The amount of full tickets you can buy is " + fullTickets + "and the leftover amount is $" + leftover.toFixed(2))


/* 3. Dog Age Converter
Convert a dog’s age to human years
(1 dog year = 7 human years)
*/
let dogAge = 3;
let humanAge = dogAge * 7;

console.log("The dog's age in human years is " + humanAge)


// 4. Combine and Print
// Create variables for your name, favorite food, and a hobby.
// Print a sentence using all 3.

let firstname = "Tuscaney";
let favoriteFood = "fruits";
let hobby = "creating";

console.log("My name is " + firstname + ", my favorite food is " + favoriteFood + ", and my hoddy is " + hobby + ".")




// 🌟 BONUS (Optional)
// Use prompt() to ask for the user's name, then greet them.
// let name = prompt("What's your name?");
// console.log("Hello, " + name + "!");

let fullname = prompt("What's your name?");
console.log("Hello, " + fullname + "!");