const name = ["VANNY", "HONGKONG", "VIETNAME"];
const number = [1, 2, 3, 4, 54, 5, 6];

const people = [{ name: "Tola", gender: "Male", Jobtile: "Cleaner" },
{ name: "SONG", gender: "Female", Jobtile: "supprt" },
{ name: "LEAP", gender: "Male", Jobtile: "Delivery" },
]

const newName=name.map(showName);

function showName(name){

    console.log(name);
}
console.log(showName);

// name.map(function(names){
//     console.log(names);
// });


// const n=number.map(function(num){
//     return num*2;
// });

// console.log(n);

const newPeople = people.map(function (person) {
    return {
        name: person.name + "sok",
        gender: person.gender.toUpperCase(),
        Jobtile: person.Jobtile.toUpperCase()
    };
});

console.log(newPeople);