


 let array = [2, 4, 1, 7, 8, 9];

const sum = array.reduce((runningTotal, currentValue)=>{
 return runningTotal+currentValue;
}, 0);
console.log(sum);












console.log(` Get the average salary of employee's from IT department `);
const newArray = arrayEmployees.filter((emp)=>{
    return emp.emp_dept=="IT";
});

const sumSalary = newArray.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );
console.log(sumSalary);
console.log(`Average salary from IT department is: ${sumSalary/newArray.length}`);