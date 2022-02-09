const out = (...str) => console.log(...str);
// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

out("Exercise 1: ")
const letters = ["a","b","c"];
// show b in the console 

out(letters[1])

out("----------------------")
// --------------------------------------
// Exercise 2 - Array Positioning
out("Exercise 2: ")

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

const cow = {}

const cat = {}

const dog = {}

friends.push(cow,cat,dog);

out(friends)
out("----------------------")
// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 
out("Exercise 3: ")

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

out(significantMathNumbers.indexOf(1729));



out("----------------------")
// --------------------------------------
// Exercise 4 - Inserting elements

out("Exercise 4:")

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2,0, "hamburger","soda", "pizza");

out(diet);


out("----------------------")
// --------------------------------------
// Exercise 5 - Remove element
out("Exercise 5:")

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop();

out(diet);

out("----------------------")
// --------------------------------------
// Exercise 6 - Copy array
out("Exercise 6:")
// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = diet.slice();

out(dinnerTray);
out("----------------------")
// --------------------------------------
// Exercise 7 - For loop
out("Exercise 7:")

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
for(let i = 1; i < lettersExpanded.length; i+=2){
    out(lettersExpanded[i])
}


out("----------------------")
// --------------------------------------
// Exercise 8 - For loop and if statement
out("Exercise 8:")

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];


// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers


for(let i = 0; i < numbers.length; i++){
    if( numbers[i] < 0 || numbers[i] >6 ){
    out(numbers[i]);
    } else {
        discardedNumbers.push(numbers[i])
    }
    
} 

out("discardedNumbers array : ")
out(discardedNumbers);

out("----------------------")
// --------------------------------------