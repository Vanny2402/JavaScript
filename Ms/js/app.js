
// let name =["A","B","C","D"];
// console.log("To String: "+name.toString());
// console.log("Join : ",name.join("*"));
let name =["A","B","C","D"];
// name.push("E");
// // name.pop();
// console.log(""+name.toString());
// console.log(name);
// name.unshift("Vanny");
// console.log(name);
// name.shift();
// console.log(name);

// console.log(name);  
// // name.splice(1,1,"VANNY","HONGKONG");// will remove B as it in index 1
// name.splice(0,3); // Will remove abc
// console.log(name);  


let boy=["Hong","HENG","LIN","NITA"];
let number=[10,11,65,23,12,2,23,12,434,122,12,34,121,34,12,212];
// const ful=boy.concat(name);
// console.log(ful);
// console.log(ful.join(""));

// const sliceArr=boy.slice(1,3);
// console.log(sliceArr);
// console.log(sliceArr.join(" "));

// console.log(name.reverse());
// console.log(name.sort().join(" ,"));

console.log(number.sort(
    function(a,b){
        return a-b;
    }
));