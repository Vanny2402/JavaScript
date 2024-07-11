let bookTitle="JS";
let book_author="you";
let bookPrice=90;

let boook=['Js','you',90];
// boook.push("Midset");
// boook.push(["C#",2030])
// console.log(boook);
// console.log(boook[2]);
// console.log(boook.pop());

// boook.forEach(function(b,index,self){
//     console.log(b,index,self);
// });

// console.log(boook.indexOf("you"));
// let str_combind=boook.join("-");
// console.log(str_combind);

// book2=["230","440"];
// console.log(boook.concat(book2));

////EP2

let number=[1,54,6,7,2,1,6];
let arrayyNum=[2,3,4,5,6,8,9];
// console.log(number);
// console.log(arrayyNum);
// number.sort();
// console.log(number);

number.sort(function(a,b){
    return a-b;
});

console.log(number);


let arr_reduce=[1,2,3,4,6,7,8,9];
let arrSub=arr_reduce.reduce(function(accum,secum){
    return secum*accum;
});
console.log(arrSub);

let slice_array=arr_reduce.slice(1,4);
console.log(slice_array);

let arr_som=["Hong","Heng","VANNAK","JING"];
let isJoin=arr_som.some(function(el){
    return el =="Heng";
});
console.log(isJoin);

