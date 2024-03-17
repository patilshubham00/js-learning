
console.log(" -------------------- Step 1 -------------------- ");



function findLargest(num1, num2) {
return Math.max(num1, num2);
}
var largestNumber = findLargest(10, -10);
console.log("Greater number among 10 & -10 is :", largestNumber);
    


function findLargest(num1, num2) {
return Math.max(num1, num2);
}
var largestNumber = findLargest(800, 899);
console.log("Greater number among 800 & 899 is :", largestNumber);


console.log(" -------------------- Step 2 -------------------- ");



function isEvenOrOddNum(n1){
var result = n1%2==0 ? "True" : "False";
console.log(`Given number is even: ${result}`);
return result;
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(101);
isEvenOrOddNum(0);


console.log(" -------------------- Step 3 -------------------- ");


var result = function(word){
var result = word.length%2==0 ? "EVEN ": "ODD";
console.log(` "${word}" word length  is : ${result} ` );
}
result("JavaScript");
result("Developer");
result("Google");
