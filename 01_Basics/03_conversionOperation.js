let score = "33abc";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber); // NaN --> Not a Number

/* 
    Number Conversion for 

    null ==> 0
    undefined ==> NaN
    true ==> 1
    string ==> NaN

    "33" ==> 33
    "33abc" ==> NaN  but still its type is Number
*/