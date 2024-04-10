


const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19]; 
console.log(`Given Array is : ${arrayNumbers}`);


console.log(`========== Step 1 ==========` );

let arrayTransform = [];
arrayNumbers.forEach(element => {
    arrayTransform.push(element+10);
});

console.log(arrayNumbers);
console.log(arrayTransform);


console.log(`========== Step 2 ==========` );


const arrayCube = arrayNumbers.map( (currentValue)=>{
    return currentValue * currentValue * currentValue;
} );
console.log(arrayCube);

console.log(`========== Step 3 ==========` );


arrayNumbers.forEach( (element, index, arrayNumbers) => {
    console.log(element, index, arrayNumbers);
    } );