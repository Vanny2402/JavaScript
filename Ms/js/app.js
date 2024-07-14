const name=["AB","BC","DE"];

const people=[
    {name:"Tola",sex:"male",possition:"Developer"},
    {name:"Seyha",sex:"Female",possition:"QA"},
    {name:"Banz",sex:"male",possition:"Cleaner"}

];

function showName(name){
    console.log(name);
    console.log("HMM");
    
}
// name.forEach(showName);



people.forEach(function(people){
    console.log(people);
})


//Long Form : 

function logPerson(person) {
    console.log(person);
}

for (let i = 0; i < people.length; i++) {
    let currentPerson = people[i]; // Get the current person from the array
    logPerson(currentPerson); // Call the function to log the person
}
