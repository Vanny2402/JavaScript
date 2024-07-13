const person={
    id:1,
    name:"VANNY",
    sex: "male",
    age:19,
    education:true,
    marrid:false,
    siblings:["Makara","Minea","Mesa"],
    greeting:function(){
        console.log("Hello VANNY");
    },

};

// for (let i in person){
//     console.log(" ID: ",person[i], "\n Name: ",person[i],"\n Gender: ",person[i],"\n Age: ",person[i],
//                 "\n Education: ",person[i],"\n Marrid: ",person[i],"\n Sibling: ",person[i],);
//                 // "\n Greeting: ",person[i]);   
// }   

for (let i in person){
    console.log(i, person[i]);
}