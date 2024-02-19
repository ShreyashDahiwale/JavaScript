const score = 300;
console.log(score);

const balance = new Number(3000000)
console.log(balance);
console.log(balance.toLocaleString('en-IN'));

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8965
console.log(otherNumber.toPrecision(5));


// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.45));
console.log(Math.ceil(4.89));  // takes the next complete value
console.log(Math.floor(4.89)); // takes the base value 



console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)