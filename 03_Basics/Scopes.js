

// console.log(a);
// console.log(b);
// console.log(c);

let a=300  //global scope
if(true){
    let a=10 //local scope
    const b=20
    var c=30

}
//console.log(a); error
//console.log(b); error
// console.log(c); //no error

//local scope and global scope


function one(){
    const username="Ritik"
    function two(){
        const website="Youtube"
        console.log(username)

    }
    //console.log(website);
    two();
}
//one()

if(true){
    const username="ritik"
    if(username==="ritik"){
        const website=" youtube"
        // console.log(username+website);
        
    }
    //console.log(website);
    

}
//console.log(username);

//+++++++++++ Interesting +++++++++++++++++

function addone(num){
    return num+1
}
addone(5)

const addtwo=function(num){
    return num+2

}
addtwo(5)