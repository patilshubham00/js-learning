
console.log("---------- Step 1 ----------");


const word = "I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    let lowerCase = char.toLowerCase();
    if (vowels.includes(lowerCase)) {
        vowelsCount++
    }    
}
console.log(`Total number of vowels in given string are : ${vowelsCount}`);


console.log("---------- Step 2 ----------");


let sum = 0;
for (let index = 0; index <=5 ; index++) {
    sum = sum + index* index* index;

}
console.log(`The sum of the cube of numbers from 1 to 5 is : ${sum}`);



console.log("---------- Step 3 ----------");

console.log("Odd positioned chars of 1st string");
function oddPositionedChars(word){
for (let index = 0; index < word.length; index++) {
    const element = word.charAt(index);
    if (index%2!=0 && element !=" ") {
        console.log(element);
    }
}
}
oddPositionedChars("Hard work always pays back");


console.log("Odd positioned chars of 2nd string");
function oddPositionedChars(word){
for (let index = 0; index < word.length; index++) {
    const element = word.charAt(index);
    if (index%2!=0 && element !=" ") {
        console.log(element);
    }
}
}
oddPositionedChars("Soon i will be UI IT Champ");












