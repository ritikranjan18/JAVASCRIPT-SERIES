const myArr=[0,1,2,3,4,5];
const myHeroes=["Thor","IronMan"];

const myarr2=new Array(1,2,3,4,5);

console.log(myArr[0])

//Arrays Methods

myArr.push(6)//add element in array
myArr.push(7)

console.log(myArr)
myArr.pop();  //delete last element
console.log(myArr)

myArr.unshift(9)   //add element in array at first position

console.log(myArr)

myArr.shift()  //remove the first element of array
console.log(myArr)

console.log(myArr.includes(9));  //check the element is present in array or not
console.log(myArr.indexOf(3));  //give the index of the element

const a=myArr.join();  //convert obejct into String
console.log(typeof myArr)
console.log(typeof a);


// slice,splice


console.log("A ",myArr);
const n1=myArr.slice(1,3);
console.log(n1)
console.log("B ",myArr)

const n2=myArr.splice(1,3);  //it manipulates orhinal array mean it pick the range form original arrays 
console.log("C ",myArr);
console.log(n2)

