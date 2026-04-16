const userEmail="ritik@gmail.com"
if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("Don't have user email");
    
}

//falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy value
//"0" , "false"," ",[],{},function(){} -->if any thing comes in douuble quotes it is truthy value
// const userEmaill=[]
// if(userEmaill.length===0){
//     console.log("Array is empty");
    
// }
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
    
// }


//Nullish coalecing Operator(??):null undefined

let val1;
// val1=5??10
// val1=null??10
val1=undefined??15
console.log(val1);

//ternary operator

let age=17
age>=18?console.log("Eligible for dirve"):console.log("Not Eligible");

