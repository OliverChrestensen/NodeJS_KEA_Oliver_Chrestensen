// this works because of hoisting
console.log(add(2,8));

function add(x,y){
    return x + y;
}

// anonymous function after the equal sign
const addInVariables = function (x,y){
    return x + y;
}

//Arrow function
const addArrowFunction = (x,y) =>{
    return x + y;
}

//arrow function one-liner
const addArrowFunction2 = (x,y) => x + y;

function doActionWithSomeone(anyFunctionReference, name){
anyFunctionReference(name);
}

const running = (name) => console.log(`${name} is running`);

function doActionWithSomeoneWithReturn(anyFunctionReference, name){
     return anyFunctionReference(name);
    
    }

doActionWithSomeone(running, "Anders")

const fishing = (name) => `${name} is fishing`;

console.log(doActionWithSomeoneWithReturn(fishing,"Alex"))

//one liner 
doActionWithSomeone((name) => console.log( `${name} is eating`), 'Oliver');




