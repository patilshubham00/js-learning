
console.log("WAP to swap variable values using third variable");

console.log("======== Before Swap ==========");

var firstName;
var lastName;
firstName = "Sweety";
lastName ="cutie"
console.log("Sweety:", firstName);
console.log("Cutie:",lastName );

console.log("======== After Swap ==========");
firstName =lastName ;
lastName = firstName;

console.log("Sweety:",lastName, firstName ,"Sweety:");

var num1 = 10; // 100
var num2 = 20; // 200
var num3 = 30; // 300


console.log("======== Before Swap ==========");
console.log("num1:", num1, " num2:", num2, "num3:", num3);

console.log("======== After Swap ==========");
var temp = num1;
num1 = num3;
num2 = num2;
num3 = num1;

console.log("num1:", num2, " num2:", num3, "num3:", temp);