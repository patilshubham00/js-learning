

console.log("----------------------------------------------------------------------------- Step 1 -----------------------------------------------------------------------------");
class Vehicle {
    constructor( Company , Name ,Model , Color , Price , Mileage  ){

        this.Company = Company;
        this.Name = Name;
        this.Model = Model;
        this.Color = Color;
        this.Price = Price;
        this.Mileage = Mileage;
    }
    detail(){
        console.log(`Vehicle Details => Company : ${this.Company} , Name : ${this.Name} , Model : ${this.Model} , Color : ${this.Color} , Price : ${this.Price} , Mileage : ${this.Mileage}`);
    }
}
const car1 = new Vehicle("Mahindra" , "Scorpio" , "Classic S11" , "Black" , "20 Lac" , "15 KMPL");
car1.detail();

const car2 = new Vehicle("Land Rover" , "Range Rover" , "Defender" ,   "Carpathian Grey" , "2.40 Crore" , "13.40 KMPL");
car2.detail();

const car3 = new Vehicle("Toyota" , "Fortuner", "Legender" , "Black" , "55 Lac" , "13.55 KMPL");
car3.detail();

const car4 = new Vehicle("Mahindra" , "Thar" , "4X4" , "Black" , "18.72 Lac" , "17.52 KMPL" );
car4.detail();

const car5 = new Vehicle("Royal Enfiled" , "Continental" , "GT 650" , "3.48 Lac" , "28 KMPL");
car5.detail();



console.log("-------------------------------------------------------------------- Traversing Array Object --------------------------------------------------------------------");

const carTraversing = [car1 , car2 , car3 , car4 , car5];
for (const element of carTraversing) {
    element.detail(); 
 }


 console.log("----------------------------------------------------------------------------- Step 2 -----------------------------------------------------------------------------");


 class College{
    constructor( Name , Branches , University , Grade , Location ){

        this.Name = Name;
        this.Branches = Branches;
        this.University = University;
        this.Grade = Grade;
        this.Location = Location;
    }
    detail(){
        console.log(`College Details =>  : College Name : ${this.Name} , Branches : ${this.Branches} , University : ${this.University} , Grade :${this.Grade} , Location :${this.Location}`);
    }
}

const clg1 = new College("FTC" , "6" , "DBATU" , "A" , "Sangola");
clg1.detail();


const clg2 = new College("SVERI" , "7" , "Solapur" , "B+" , "Pandharpur");
clg2.detail();

const clg3 = new College("COEP" , "6" , "SBPU" , "B" , "Pune");
clg3.detail();

const clg4 = new College("KIT" , "10" , "Kolhapur" , "A+" , "Kolhapur");
clg4.detail();