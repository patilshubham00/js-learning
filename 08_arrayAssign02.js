
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log("==================== Original array ====================");
console.log(arrayNumbers);


console.log("==================== Step 1 ====================");

console.log(`The Length Element is : ${arrayNumbers.length}`);


console.log("==================== Step 2 ====================");

var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
const subArray = arrayNumbers.slice(0,1);
console.log(`The First no in Array is : ${subArray}`);
const array = arrayNumbers.slice(10);
console.log(`The First no in Array is : ${array}`);


console.log("==================== Step 3 ====================");

var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
const number =arrayNumbers.splice(8,1,60);
console.log(`Third Last element is : ${number}`);


console.log("==================== Step 4 ====================");
var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log(`All Even Numbers Of Array`);
for (const iterator of arrayNumbers) {
    if (iterator%2==0) {
        console.log(iterator);
    }
    
}

console.log("==================== Step 5 ====================");

var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`All Odd Numbers of Array`);
for (const iterator of arrayNumbers) {
    if (iterator%2!==0) {
        console.log(iterator);
    }
}

console.log("==================== Step 6 ====================");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
let sumEven=0;
for (const key in arrayNumbers) {
    if (key%2==0) {
        sumEven = sumEven + arrayNumbers[key];
        
    }
}
console.log(`Sum Of All Even Positioned Numbers : ${sumEven}`);

console.log("==================== Step 7 ====================");

let sumOdd=0;
for (const key in arrayNumbers) {
    if (key%2!==0) {
        sumOdd = sumOdd + arrayNumbers[key];
        
    }
}
console.log(`Sum Of All Odd Positioned Numbers : ${sumOdd}`);



console.log("==================== Step 8 ====================");

var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
let sum=0;
for (const element of arrayNumbers) {
      sum = sum + element;
}
console.log(`Sum of All Elements From Array : ${sum}`);



console.log("==================== Step 9 ====================");

console.log(`The Numbers Which Are Multiple Of 5`);
for (const iterator of arrayNumbers) {
    if (iterator%5==0) {
        console.log(iterator);
    }
}

console.log("==================== Step 10 ====================");
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(arrayNumbers);
console.log(`Is Number 115 Available In Array Numbers :`);
console.log(arrayNumbers.includes(115));


console.log("==================== Step 11 ====================");
console.log(`Is Number 23 Available In Array Numbers :`);
console.log(arrayNumbers.includes(23));


console.log("==================== Step 12 ====================");

var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
const removeElement = arrayNumbers.splice(3,0,55,66 );
console.log(`After inserting 55,66  at index 3 `);
console.log(arrayNumbers);

console.log("==================== Step 13 ====================");

const deleteElements = arrayNumbers.splice(3, 3);
console.log(`Deleting 3 element from index 4 `);
console.log(arrayNumbers);