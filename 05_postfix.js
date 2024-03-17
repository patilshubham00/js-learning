console.log("********** Postfix **********");


console.log("********** Step 1 **********");


var a = 5;
var b = a++ ;
console.log(a);
console.log(b);


console.log("********** Step 2 **********");


var n1 = 5;
var res = n1++ + ++n1 + n1++;
console.log(n1);
console.log(res);


console.log("********** Step 3 **********");


var a = 2;
var b = ++a + ++a + a++ - --a;
console.log(a);
console.log(b);

console.log("********** Step 4 **********");


var a = 4;
var b = a-- + ++a + ++a + a++;
console.log(a);
console.log(b);


console.log("********** Step 5 **********");


var n1 = 10;
console.log( n1 / 2 == 0);


console.log("********** Step 6 **********");