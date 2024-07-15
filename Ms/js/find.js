
const People=[
    {id: 1,name:"Tola",age:16,sex:"male",possition:"cleanner"},
    {id: 2,name:"Pisey",age:15,sex:"Female",possition:"Designer"},
    {id: 3,name:"Makara",age:16,sex:"male",possition:"consultance"},
    {id: 4,name:"Dalin",age:16,sex:"Female",possition:"QA"},
    {id: 5,name:"Kok",age:16,sex:"male",possition:"Plache"}
];

const newPeople=People.find(function(p){
    return p.age<=18;
});

console.log(newPeople);