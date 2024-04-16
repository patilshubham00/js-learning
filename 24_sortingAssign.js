



class Employees{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_dept=emp_dept;
    this.emp_salary=emp_salary;
    this.emp_company=emp_company;
    }
    detail(){
        console.log(`Employee Details => emp_id: ${this.emp_id}, emp_name: ${this.emp_name}, emp_dept: ${this.emp_dept}, emp_salary: ${this.emp_salary}, emp_company: ${this.emp_company}`);
    }
    }
    const emp_anil = new Employees(22,"Anil","IT",50000,"TCS");
    const emp_radha = new Employees(33,"Radha","HR",74000,"Wipro");
    const emp_rishi = new Employees(55,"Rishi","Fianance",47000,"TCS");
    const emp_sonali = new Employees(66,"Sonali","Fianance",45000,"Infy");
    const emp_monika = new Employees(77,"Monika","IT",40000,"Wipro");
    const emp_viny = new Employees(88,"Vinayak","IT",75000,"TCS");
    const emp_mahi = new Employees(99,"Mahesh","HR",85000,"Infy");
    
    const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

    console.log(`========== Step 1 ==========` );

    arrayEmps.sort((p1, p2)=>{
        return p1.emp_id<=p2.emp_id ? 1 : -1
    });
    

    arrayEmps.forEach(element => {
        console.log(element.emp_id, element.emp_name, element.emp_dept);
    });

    console.log(`========== Step 2 ==========` );

    arrayEmps.sort((p1, p2)=>{
        return p1.emp_dept>=p2.emp_dept ? 1 : -1
    });
    
    arrayEmps.forEach(element => {
        console.log(element.emp_id, element.emp_dept, element.emp_company);
    });
    
    console.log(`========== Step 3 ==========` );



    arrayEmps.sort((p1, p2)=>{
        return p1.emp_salary<=p2.emp_salary ? 1 : -1
    });
    
 


    arrayEmps.forEach(element => {
        console.log(element.emp_name,  element.emp_salary, element.emp_company);
    });