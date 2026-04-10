const name="Ritik";
const repoCount=50;

//console.log(name+repoCount+" Value");


//String interpolation ` `(backticks)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('Ranjan-Ritik-Niet')

//go through all methods of strings

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'))
const newString=gameName.substring(0,4);
console.log(newString)

const anString=gameName.slice(-5,4);
console.log(anString)


const nS="  TItik  ";
console.log(nS)
console.log(nS.trim());
console.log(nS.trimStart());
console.log(nS.trimEnd());

const url="https.google.com"
console.log(url.replace('com','niet'))

console.log(url.includes('com'));

console.log(gameName.split('-'))


