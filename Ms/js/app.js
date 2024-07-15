// const name = ["VANNY", "HONGKONG", "VIETNAME"];
// const number = [1, 2, 3, 4, 54, 5, 6];

const people = [{ name: "Tola", gender: "Male", Jobtile: "Cleaner" },
{ name: "SONG", gender: "Female", Jobtile: "supprtIT" },
{ name: "LEAP", gender: "Male", Jobtile: "Delivery" },
{ name: "Long", gender: "Femal", Jobtile: "PD" }
];

// const male=people.filter(function(name){
//     return name.gender =="Male";
// })

// console.log(male);




function showMale(person){
    return person.gender=="Male";
}
const male=people.filter(showMale);
console.log(male);

// const person={id:1,name:"VANNY",sex: "male",age:19,education:true,marrid:false,siblings:["Makara","Minea","Mesa"],
//     greeting:function(){
//         console.log("Hello VANNY");
//     }
// };

// for (let i in person){
//     console.log(i, person[i]);
// }