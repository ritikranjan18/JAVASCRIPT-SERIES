//dates

let myDate=new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());

let myCreatedDate=new Date(2026,3,11)
console.log(myCreatedDate.toDateString())

let d=new Date("2026-03-11") //yy-mm-dd
console.log(d.toLocaleString())


let dr=new Date("11-03-20216")  //dd-mm-yy
console.log(d.toLocaleString())

let mytimestamp=Date.now();
console.log(dr.getTime());

console.log(Math.floor(Date.now()/1000));


let newdate=new Date();

console.log(newdate.getMonth()+1);

newdate.toLocaleString('default',{
    weekday:"long",
})

console.log(newdate)

