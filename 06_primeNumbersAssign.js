
console.log("=================== Step 1 ===================");


const array = [3, 9, 7, 6, 19, 29, 53];
console.log(`Given array is =====>>>>> ${array}`);


function isPrime(num){
    for (let index = 2; index < num; index++) {
      if (num%index==0) {
       return false;
      } 
    }
    return true;
   }
   const result = isPrime(3);
   console.log(`Is 7 Prime Number : ${result}`);
   
   const result1 = isPrime(9);
   console.log(`Is 9 Prime Number : ${result1}`);

   const result2 = isPrime(7);
   console.log(`Is 7 Prime Number : ${result2}`);
   
   const result3 = isPrime(6);
   console.log(`Is 9 Prime Number : ${result3}`);

   const result4 = isPrime(19);
   console.log(`Is 7 Prime Number : ${result4}`);

   const result5 = isPrime(29);
   console.log(`Is 7 Prime Number : ${result5}`);

   const result6 = isPrime(53);
   console.log(`Is 7 Prime Number : ${result6}`);





console.log("=================== Step 2 ===================");



var str = "Rivision is the mother of success";
var numOfSpaces = str.split(" ").length - 1;
console.log(`Total Number of Space : ${numOfSpaces}`);

var str1 = "Java Script is the language of internate world";
var numOfSpaces1 = str1.split(" ").length - 1;
console.log(`Total Number of Space : ${numOfSpaces1}`);