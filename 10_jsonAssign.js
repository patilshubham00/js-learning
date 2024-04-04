

let person = {
"name" :["Aleix Melon"], 
"id" : "E00245",
"role" : ["Dev", "DBA"], 
"age" : 23 ,
"doj" :"11-12-2019" ,
"married" : false ,
"address" : {
    "street" : "32 , laham St.",
    "city" : "Innsbruk",
    "country" :"Austri"
},
"referred-by" : "E0012"
}





const personJSON = `
{
    "name" : "Aleix Melon", 
    "id" : "E00245",
    "role" : ["Dev", "DBA"], 
    "age" : 23 ,
    "doj" :"11-12-2019" ,
    "married" : false ,
    "address" : {
        "street" : "32 , laham St.",
        "city" : "Innsbruk",
        "country" :"Austri"
    },
    "referred-by" : "E0012"
    }
`;


console.log("========================= Convert this one to object =========================");

const personObject = JSON.parse(personJSON);
console.log(typeof personObject);
console.log(personObject);
console.table(personObject);


console.log("========================= Log on console role ---> 'Dev' =========================");

console.log(`first Element of role is =${person.role[0]}`);

console.log("========================= Log only last name  ---> 'Melon' =========================");

var array = ["Aleix" , "Melon"];
console.log(array);
const result = array.splice(1);
console.log(`Last Element of name is = ${result}`);



console.log("========================= Log only joining year of employee  ---> 2019 =========================");

var array = ["11","12","2019"];
console.log(array);
const newArray  = array.splice(2);
console.log(`Joining Year of employee is = ${newArray}`);