// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const floatNumberOne = parseFloat(numberOne);
const floatNumberTwo = parseFloat(numberTwo);

console.log("Exercise 1: ")
console.log(floatNumberOne + floatNumberTwo);




// --------------------------------------

 console.log("-----------------------------")
// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const total = floatNumberOne + floatNumberTwo;

console.log("Exercise 2: ")
console.log(parseFloat(total).toFixed(2));





console.log("-----------------------------")

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

average = (one + two + three)/3;

console.log("Exercise 3: ")
console.log(average.toFixed(5));


console.log("-----------------------------")

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

letters.substring(2);
console.log("Exercise 4: ")
console.log(letters.substring(2));


console.log("-----------------------------")

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log("Exercise 5: ")

 console.log(fact.replace("j","J"))

// --------------------------------------
console.log("-----------------------------")

