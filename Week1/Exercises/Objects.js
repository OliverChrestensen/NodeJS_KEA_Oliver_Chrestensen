const out = (...str) => console.log(...str);

// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

// Log the message 
out("Exercise 1: ")
out(alienMessage.message);


out("----------------------")
// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
out("Exercise 2: ")


const me = {
    name: "Oliver",
    age: 23
}

out(me)


out("----------------------")
// --------------------------------------
// Exercise 3 - Add a property 


const stackOverflow = {};


out("Exercise 3: ")


// make a rule called isAllowed and let the value be true

stackOverflow.rule = true
out(stackOverflow)

out("----------------------")
// --------------------------------------
// Exercise 4 - Remove a property 

out("Exercise 4: ")
const thisSong = {
	description: "The best song in the world."
}


// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

thisSong.about = "Just a tribute"

out(thisSong)

out("----------------------")
// --------------------------------------
