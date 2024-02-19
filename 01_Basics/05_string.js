const name = "Shreyash"
const repoCount = 50

// console.log(name + repoCount + " Value");

// String interpolation
console.log(`Hello my name is ${name} and my Repo Count is ${repoCount}`);

const gameName = new String('Shreyash-HC')
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('r'));
console.log(gameName.charCodeAt(5));


const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-10, 5)
console.log(anotherString);

const newStringOne = '    Shreyash    '
console.log(newStringOne);
console.log(newStringOne.trim());  // removes white spaces
console.log(newStringOne.trimEnd());  // removes white spaces

const url = 'https://shreyash.com/Shreyash%20Dahiwale'
console.log(url.replace('%20', '-'));