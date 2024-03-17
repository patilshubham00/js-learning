console.log("=====================================================");
// numeric string used with + gives string type 


result = '3' + 2;
console.log(result);



result = '3' + true;
console.log(result);



result = '3' + undefined;
console.log(result);




result = '3' + null;
console.log(result);


console.log("=====================================================");
// if boolean is used , true is 1 , false is 0




result = '4' - true;
console.log(result);



result = '4' + true;
console.log(result);



result = '4' + false;
console.log(result);

console.log("=====================================================");
//numeric string used with - , / . *  results number type




result = '4' - '2';
console.log(result);



result = '4' - 2;
console.log(result);



result = '4' * 2;
console.log(result);



result = '4' / 2;
console.log(result);


console.log("=====================================================");
// Arithmetic operation of undefined with number , boolean or null gives NaN



result = 4 + undefined ;
console.log(result);



result = 4 - undefined ;
console.log(result);



result = true + undefined ;
console.log(result);



result = null + undefined ;
console.log(result);



console.log("=====================================================");
//String to number 



result = Number('324') ;
console.log(result);



result =Number('324e-1') ;
console.log(result);


console.log("=====================================================");
//Boolean to number



result = Number(true);
console.log(result);



result = Number(false) ;
console.log(result);


console.log("=====================================================");
//If a string an invalid number , the result will be NaN . For example,



result = Number('hello');
console.log(result);



result = Number(undefined) ;
console.log(result);



result = Number(NaN) ;
console.log(result);



console.log("=====================================================");
// Explicit conversion: string to number using + operator


var numberInString = '100';
console.log(typeof numberInString);


var myNumber = +numberInString;
console.log(typeof myNumber);


console.log("=====================================================");
// Explicit conversion: number to string data type conversion using toString() method



var myNumber = 100;
console.log(typeof myNumber);
var afterConversion = myNumber.toString();
console.log(typeof afterConversion);
