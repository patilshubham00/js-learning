

var fruits_seasonal = ["Banana" , "Orange" , "Apple" , "Mango" , "Water Melon"];
console.log("==================== Original array ====================");
console.log(fruits_seasonal);

console.log("==================== Step 1 ====================");

console.log(fruits_seasonal.length-1);

console.log("==================== Step 2 ====================");

var fruits_seasonal = ["Banana" , "Orange" , "Apple" , "Mango" , "Water Melon"];
console.log(fruits_seasonal);
fruits_seasonal.unshift("papaya");
console.log(fruits_seasonal);

console.log("==================== Step 3 ====================");

var fruits_seasonal = ["Banana" , "Orange" , "Apple" , "Mango" , "Water Melon"];
console.log(fruits_seasonal);
const deleteElement = fruits_seasonal.splice(3, 1);
console.log(deleteElement);
console.log(fruits_seasonal);


console.log("==================== Step 4 ====================");

var fruits_seasonal = ["Banana" , "Orange" , "Apple" , "Mango" , "Water Melon"];
console.log(fruits_seasonal);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);



console.log("==================== Step 5 ====================");

var fruits_seasonal = ["Banana" , "Orange" , "Apple" , "Mango" , "Water Melon"];
console.log(fruits_seasonal);
const removeElement = fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(removeElement);
console.log(fruits_seasonal);



console.log("==================== Step 6 ====================");

var fruits_seasonal = ["Banana" , "Orange" , "Apple" , "Mango" , "Water Melon"];
console.log(fruits_seasonal);
const deleted = fruits_seasonal.splice(1, 1, "Kiwi");
console.log(deleted);
console.log(fruits_seasonal);


console.log("==================== Step 7 ====================");

var fruits_seasonal = ["Banana" , "Orange" , "Apple" , "Mango" , "Water Melon"];
console.log(fruits_seasonal);
const subArray =fruits_seasonal.slice(1, 5);
console.log(subArray);



console.log("==================== Step 8 ====================");

var fruits_seasonal = ["Banana" , "Orange" , "Apple" , "Mango" , "Water Melon"];
console.log(fruits_seasonal);
const result = fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(result);