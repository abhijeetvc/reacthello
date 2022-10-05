
let fruits=['Apple','Orange','Mango']

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// fruits.forEach((item)=>{
//     console.log(item);
// })

//for of
// for(let item of fruits){
//     console.log(item);
// }

//for in
// for(let item in fruits){
//     console.log(fruits[item]);
// }

const person={
    id:1,
    name:"John",
    city:"Pune"
}

for(let p in person){
    console.log(p+" : "+person[p]);
}

let fruits1=[fruits,"Banana"]


// fruits.forEach((item)=>{
//     fruits1.push(item)
// })
console.log(fruits1);