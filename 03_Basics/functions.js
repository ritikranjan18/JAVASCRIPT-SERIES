function sayMyName(){
    console.log("R")
    console.log("I")
    console.log("T")
    console.log("I")
    console.log("K")
}
//sayMyName();

// function addTwoNumber(num1,num2){   //(num1,num2) ----> Parameters
//     console.log(num1+num2)
// }
// addTwoNumber(2,2); //(2,2) ----> arguments
function addTwoNumber(num1,num2){   //(num1,num2) ----> Parameters
    let result=num1+num2
    return result
}

const result=addTwoNumber(3,5)
// console.log("result",result);

function loginUserMessage(username="Unknown"){
    if(username===undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`  
}

let result1=loginUserMessage()  //if we do not pass argument then it return undefined
// console.log(result1)


function calculateCartPrice(...num1){  //here ... is rest operator which help to pass multiple value
    return num1
}

// console.log(calculateCartPrice(200,300,500));

const user={
    username:"Ritik",
    price:199
}
function handleIbject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`)
}
handleIbject(user)

const newArr=[200,400,10,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,300,400]));
