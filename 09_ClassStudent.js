
class Student {
    constructor( rollNumber , name , division){

        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
    }
    detail(){
        console.log(`Student Details =>  Roll Number: ${this.rollNumber} , Name: ${this.name},, Division: ${this.division}`);
    }
}
const Shubham = new Student("09", "Shubham","A" );
Shubham.detail();

const Prathmesh = new Student("22", "Prathmesh", "B");
Prathmesh.detail();

const Legend = new Student("13", "Legend","C");
Legend.detail();