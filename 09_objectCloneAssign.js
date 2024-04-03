
console.log(`=============== Step 1 ===============`);

const bankSbi = {
    bankName : "SBI",
    ifscCode : 12345,
    accountNumber : 9874563211,
    branch : "Sangola",
}
console.log(bankSbi);


console.log(`=============== Step 2 ===============`);

const bankLocation = {
    street : "Sangola" ,
    city : "Solapur",
    pin : 415588,
}
console.log(bankLocation);

console.log(`===============   Step 3 (Object assign) ===============`);
const cloneBankSbi = Object.assign({},bankSbi , bankLocation );
console.log(cloneBankSbi);


console.log(`=============== Step 4 ===============`);


const rateOfInterest = {
homeLoanInterest : 9.5,
personalLoanInterest : 6.9,
dueInterest : 8.7,
}
console.log(rateOfInterest);

console.log(`=============== Step 5 (merge Object) ===============`);

const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);



console.log(`=============== Traverse the merged object using for in loop ===============`);

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}    : ${element}`);
        
    }
}
