class Department3{
    //static variable
    static fiscalyear=2022;
     //private employees:string[]=[];
     protected employees:string[]=[];
    constructor(private readonly id:string,private name:string){
//console.log(this.fiscalyear) //error
//console.log(Department3.fiscalyear) //way to access ststic variable inside any method
    }
    //static method
static createEmployee(name:string){
    return{name:name}
    }
    describe(this:Department3){
        console.log("Department: "+this.name);
    }
    addEmployee(employee:string){
        this.employees.push(employee)
    }
    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
}
class ITDepartment extends Department3{
    admins:string[]
constructor(id:string,admins:string[]){
    super(id,"IT");
    this.admins=admins
}
}
class AccountsDepartment extends Department3{
   //getter setter
   private lastReport:string;
   get mostRecentReport(){
       if(this.lastReport){
            return this.lastReport
       }
      throw new Error("no report!!!!!!!")
   }
   set mostRecentReport(value:string){
    if(!value){
        throw new Error("pass valid value!!!!!!!")
    }
   this.addReports(value)
}
constructor(id:string,private reports:string[]){
    super(id,"IT");
   this.lastReport=reports[0];
}

addReports(text:string){
this.reports.push(text)
this.lastReport=text;
}
printReports(){
    console.log(this.reports)
}
addEmployee(employee: string): void {
    if(employee=="max"){
        return;
    }
    this.employees.push(employee);
}
}

console.log("inheritance demo")
const emp1=Department3.createEmployee("peter");
console.log(emp1,Department3.fiscalyear);
const it2=new ITDepartment("D001",["sam"]);
console.log(it2)
it2.describe();
it2.addEmployee("sam");
it2.addEmployee("ram");
//it1.employees[2]="peter"; //can be accessed outside of class //after adding parivate generate error
it2.printEmployeeInfo();

console.log("===========")

const acc=new AccountsDepartment("D002",[]);
//console.log(acc.mostRecentReport) //uncaught Error: no report!!!!!!!
//acc.mostRecentReport=''; //Uncaught Error: pass valid value!!!!!!!
acc.mostRecentReport='year end report';
acc.addReports("something went to wrong....")
acc.printReports();
acc.addEmployee("max");
acc.addEmployee("mau");
acc.printEmployeeInfo();
console.log(acc.mostRecentReport)