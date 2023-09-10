// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// The above comparisons are the best comparison cause both side the same datatypes are there..... 


// console.log("2" > 1);
// console.log("02" > 1);

// Yaha par bhii fasne ka bahut jaada chance hai, kyuki different datatype hai toh best approach yahi hai ki same data-type ko compare karo for better results.......


console.log(null > 0);   // output false
console.log(null == 0); // output false 
console.log(null >= 0); //  output true; idhr null ko js ne 0 mei convert kardiya 

// yaha par null kabhi 0 mei convert hoga kabhi NaN mei karenge...
// The reason is here that the equality check == and comparisons > < >= <= work differently in the javascript language...

// Do avoid these type of comparison


// console.log(undefined < 0 )
// console.log(undefined == 0 )
// console.log(undefined <= 0 )   

// Here undefined also works different in the js 


//Do avoid these types of conversion - null and undefined ko.....
