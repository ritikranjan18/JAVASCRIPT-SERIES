const marvel_heros =["Thor","IronMan","SpiderMan"];
const Dc=["SuperMan","BatMan","Flash"];

// marvel_heros.push(Dc);

// console.log(marvel_heros[3][1])

// let hello=marvel_heros.concat(Dc);
// console.log(hello)

const allnew=[...marvel_heros,...Dc];  //... spread method
// console.log(allnew)

const a=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const b=a.flat(Infinity); //to reslove array inside arrya
console.log(b)

console.log(Array.isArray("Ritik"))
console.log(Array.from("Ritik"))  //convert in array

console.log(Array.from({name:"Ritik"}))  //intresting

let s1=100;
let s2=200;
let s3=300;

console.log(Array.of(s1,s2,s3));




