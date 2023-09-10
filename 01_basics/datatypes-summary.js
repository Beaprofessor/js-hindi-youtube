// # Primitive Datatypes...


// Types : String , Number , Boolean , Null , Undefined , Symbol , BigInt 

const score = 100 
const scoreValue = 100.13
const isLoggedIn = true
const outTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 1227874672565254n

// # Reference Types Or Non-Primitive Datatypes...

// Array  , Objects , Functions 

const heros = ["shaktiman" , "superman" , "batman"];

let myObj =  {
    name: "Lokesh",
    id: 22,
}

const myFunction = function(){
    // console.log("Hey World");
}

// what is the type of our variables (primitive) , lets see

console.log(typeof scoreValue); // type -> number
console.log(typeof isLoggedIn); // type -> boolean 
console.log(typeof outTemp);    // type -> object (null ka type)
console.log(typeof userEmail);  // type -> undefined  
console.log(typeof id);         // type -> symbol
console.log(typeof anotherId);  // type -> symbol 
console.log(typeof bigNumber);  // type -> bigint



// what is the type of our variables (Non-primitive) , lets see

console.log(typeof heros);  // type -> object (array)
console.log(typeof myObj);  // type -> object (object)
console.log(typeof myFunction);  // type -> function (functions)
