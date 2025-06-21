const name = "honey"
const age = 12
console.log(`Hello my name is ${name} and my age is ${age}`);

const gamename = new String('honey-agrawal')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(7));
console.log(gamename.indexOf('a'));
const newstring = gamename.substring(0, 4) 
console.log(newstring);
const anotherstring = gamename.slice(0, 4);
console.log(anotherstring);
const anotherstrings = gamename.slice(-4, 4);
console.log(anotherstrings);