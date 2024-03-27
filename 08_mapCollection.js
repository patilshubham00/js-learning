




























console.log(mapStudentMarks.keys());
console.log(mapStudentMarks.values());

console.log(`========= keys() and values() method=================`);
const keys = mapStudentMarks.keys();
for (const iterator of keys) {
    console.log(iterator);
}

const values = mapStudentMarks.values();
for (const iterator of values) {
    console.log(iterator);
}

console.log(`========= Traversing Map=================`);
const keysMap = mapStudentMarks.keys();
for (const key of keysMap) {
    const value = mapStudentMarks.get(key);
    console.log(`Student Name: ${key} and Marks: ${value}`);
}