//singleton //object.creat()

//obejct literals
const mySymbol=Symbol("Key1");
const Jsuser={
    name:"Ritik Ranjan",
    [mySymbol]:"mykey1",
    age:22,
    location:"UP",
    email:"ritik@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","saturday"]

}

console.log(Jsuser.email) //one way
console.log(Jsuser["email"])   // if we write "name":"RItik" then we cannot access it by jsuser.name that's why we use it.
console.log(typeof Jsuser[mySymbol])


//change value in object


Jsuser.email="hello@gmail.com"
console.log(Jsuser["email"])
//Object.freeze(Jsuser);
console.log(Jsuser);


Jsuser.greeting=function(){
    console.log("Hello JS User")

}
Jsuser.greetingt=function(){
    console.log(`Hello JS User,${this.name}`);

}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingt());


