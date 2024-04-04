

let person = {
"name" :["Aleix " , " Melon"], 
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


console.log("========================= Log on console role ---> 'Dev' =========================");

console.log(person.role[0]);

console.log("========================= Log only last name  ---> 'Melon' =========================");

console.log(person.name[1]);



console.log("========================= Log only joining year of employee  ---> 2019 =========================");
