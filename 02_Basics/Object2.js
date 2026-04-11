// //singletion

// const tinderUser=new Object()
// tinderUser.id="123abc"
// tinderUser.name="Samay"
// // console.log(tinderUser)

// const regualarUser={
//     email:"some@gmail.com",
//     fullname:{
//         UserFullname:{
//             firstname:"Ritik",
//             lastname:"Ranjan"
//         }
//     }
// }
// // console.log(regualarUser);

// const obje1={1:"a",2:"b"}
// const obje2={3:"c",4:"d"}
// const obj=Object.assign(obje1,obje2)
// const objj=Object.assign({},obje1,obje2)

// const objjj={...obje1,...obje2}  //spread
// console.log(obj)  
// console.log(objj);

// console.log(objjj);

// console.log(Object.keys(tinderUser))

// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser))

//object destructuring
const course={
    courseName:"Javascript",
    price:999,
    courseInstructor:"Ritik"
}

const {courseInstructor:Instructor}=course
console.log(Instructor);

//++++  API  ++++++

// { //JSON
//     name:"Ritik",
//     coursename:"JavaScript",
//     price:"free"
// }

