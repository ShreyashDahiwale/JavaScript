// Problem comes when we don't compare the data of same type

console.log("2" > 1);
console.log("02" > 1);

// while comparison the null is treated as 0
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// Typeof function is function 
// Typeof Null is Object 
// Typeof Undefined is undefined