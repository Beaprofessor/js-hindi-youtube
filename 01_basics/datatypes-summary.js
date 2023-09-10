// # Primitive Datatypes...

// Types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.13;
const isLoggedIn = true;
const outTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 1227874672565254n;

// # Reference Types Or Non-Primitive Datatypes...

// Array  , Objects , Functions

const heros = ["shaktiman", "superman", "batman"];

let myObj = {
  name: "Lokesh",
  id: 22,
};

const myFunction = function () {
  // console.log("Hey World");
};

// what is the type of our variables (primitive) , lets see

// console.log(typeof scoreValue); // type -> number
// console.log(typeof isLoggedIn); // type -> boolean
// console.log(typeof outTemp); // type -> object (null ka type)
// console.log(typeof userEmail); // type -> undefined
// console.log(typeof id); // type -> symbol
// console.log(typeof anotherId); // type -> symbol
// console.log(typeof bigNumber); // type -> bigint

// // what is the type of our variables (Non-primitive) , lets see

// console.log(typeof heros); // type -> object (array)
// console.log(typeof myObj); // type -> object (object)
// console.log(typeof myFunction); // type -> function (functions)

// +++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)

// Stack -> aapne jo bhi ek variable declare kara hai uska aapko ek copy milta hai...

// Heap -> aur jab bhi aapne kisi variable ko iss memory mei define kara hai usme aapko milta hai  reference (original value mei change hoga agar jab bhi karoge).....


let schoolName = "XXXX School"

let collegeName = schoolName
// collegeName = "AAAA College"

console.log(schoolName);
console.log(collegeName);


let userOne = {
    email: "kohli@indian.com",
    id: "18",
}

let userTwo = userOne
userTwo.email = "Kohli@nike.com"

console.log(userOne.email);
console.log(userTwo.email);


// guys kuch samjh aaya ??


// ni aya toh suno , stack primitive datatypes ko support karta hai , and unme jab bhi wo stack memory mei datatypes define hote hai toh wo bas copy karte hai values ko 
// let schoolName = "XXXX School"

// let collegeName = schoolName
// // collegeName = "AAAA College"

// console.log(schoolName);
// console.log(collegeName);
// jaise ki idhr dekh sakte ho schoolName ko ek name diya hai and collegeName ko schoolName ke equal kara hai and agar yaha ab direct print karoge toh same output aayega , 
// and agar collegeName ko update karoge toh schoolName update ni hoga kyuki idhr schoolName ne starting mei apni bas value copy di thi na ki direct reference.....idhr output change honge....





// let userOne = {
//     email: "kohli@indian.com",
//     id: "18",
// }

// let userTwo = userOne
// userTwo.email = "Kohli@nike.com"

// console.log(userOne.email);
// console.log(userTwo.email);
// and in HEAP memory mei jab bhi variables defined hote hai toh wo refernce ko dekhte hai , 
// Ab idhr dekhe toh userOne aur userTwo same output denge , agar userTwo ko kuch update karoge toh userOne mei bhi same value hogi , kyuki idhr memory ka direct refernce milta hai 