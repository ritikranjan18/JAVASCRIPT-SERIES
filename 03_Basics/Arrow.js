const user={
    username:"Ritik",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);   //current context-->we use this keyword2
        console.log(this);  
        
    }

}
// user.welcomeMessage()
// user.username="Sam"   
// user.welcomeMessage()

// console.log(this); //there is no context in global that why it output is empty
//in browser the global object is window object 

// function chai(){
//     console.log(this);
    
// }
// chai()

// const chai=function(){
//     let username="Ritik"
//     console.log(this.username);
    
// }
// chai()

// const chai=()=>{
//     let username="Ritik"
//     console.log(this);
    
// }
// chai()


// const addTwo=(num1,num2)=>{  //arrow function
//     return num1+num2
// }
// const addTwo=(num1,num2)=> num1+num2  //implicit return //when curly braces use then return keyword statement is compulsory
// const addTwo=(num1,num2)=> (num1+num2)  //when parenthesis use then there is no need to use return key word
const addTwo=(num1,num2)=>({username:"Hisesh"})
console.log(addTwo(3,4));


