const accountId = 123924
let accountEmail = "lokesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // Ye sabse ganda tarika hai variable define karne ka , So say no to use it....
let accountState;

// accountId = 123 aese changes allowed ni hai *const* keyword se 

accountEmail = "Hey@ok.com"
accountPassword = "54321"
accountCity = "pune"
console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);

// As we can see agar javascript mei koi variable declare kara hai toh usko value deni hogi I mean define karna hoga otherwise ouput mei undefined dega...
/*
Prefer not to use var 
Because of issue in block scope and functional scope
*/