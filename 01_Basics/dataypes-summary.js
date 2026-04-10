// PRIMITIVE DATAYPES--->call by value --means you do not get original data you get the copy of data 

// 7 types: STring,Number,Boolean,null,undefined,Symbol(unique),BigInt(large value)

//Reference Type Or NON PRIMITIVE ---adress of the data

// Array,object,functions



//**JavaScript is dynamically typed, meaning type checks are performed at runtime rather than during a separate compilation step*****


const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherid=Symbol('123');

console.log(id===anotherid);


const bigNumber=345334567789n;


const heros=["Thor","IronMan","Captain Amrica"];  //arrays
//object
let obj={
    name:"Ritik",
    age:22,
};

const myfunction= function(){
    console.log("Hello World");
}
//non primitive datattype  types are objects except function
console.log(typeof(heros))
console.log(typeof(myfunction))
console.log(typeof(obj))
console.log(typeof(Symbol))



//+++++++++++++++++++++++++++++++++++++++++++++

//Stack mameory(Primitive datatype)----does not change original value
//heap memeory(non-primitive datatype)----change oirginal value

let myname="hello World"
let anothername=myname;
anothername="chai";
console.log(myname);
console.log(anothername)

let userOne={
    email:"user@gmail.com",
    upiid:"use123"
}
let userTwo=userOne;
userTwo.email="hh@gmail.com";

console.log(userOne.email);

console.log(userTwo.email);
