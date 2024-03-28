
console.log(`==================== Add Minimum 5 Properties ==================== `);

const jennyPerson = {
    name: "Jenny",
    age: 25,
    subject: "English",
    College:" FTC,Sangola",
    Pin : 413307,
    country: "India",
}
console.log(jennyPerson);

console.log(`==================== include nested object Degrees ==================== `);


const Degrees = {
    Engineering : "CSC",
    PHD: "Adv Computing", 
}
console.log(Degrees);

console.log(`==================== Add one Array ==================== `);


var  certificates = ["Hacker Rank Participation " , "Certificate in IFE Course" , "Certificate in Adv Programming" ];
console.log(certificates);



console.log(`==================== Total Experience  ==================== `);

const totalExperience = {
      Experience: 14,
}
console.log(totalExperience);

console.log(`==================== Add one new certificates  ==================== `);


var  certificates = ["Hacker Rank Participation " , "Certificate in IFE Course" , "Certificate in Adv Programming" ];
certificates.splice(2,0,"Oracle Certificates");
console.log(certificates);



console.log(`==================== The last elements in certificates  ==================== `);


var  certificates = ["Hacker Rank Participation " , "Certificate in IFE Course" , "Certificate in Adv Programming" ];
const lastElement = certificates.slice(2,3);
console.log(`Last Element is : ${lastElement}`);


console.log(`==================== Traverse the Array  ==================== `);


var  certificates = ["Hacker Rank Participation " , "Certificate in IFE Course" , "Certificate in Adv Programming" ];
for (let index = 0; index < certificates.length; index++) {
    const element = certificates[index];
    console.log(element);
}
