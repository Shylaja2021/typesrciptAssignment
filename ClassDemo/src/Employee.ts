class Department1{
    private readonly id:string="D001";
    // private name:string;
    // private employees:string[]=[];
    //constructor reserved keyword,initialize object
    // constructor(n:string){
    //     this.name=n;
    // }
    //to avoid double steps of initialization
    constructor(private name:string,private employees:string[]){

    }
    describe(this:Department1){
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

const it1=new Department1("IT",["raju"]);
console.log(it1)
it1.describe();
it1.addEmployee("sam");
it1.addEmployee("ram");
//it1.employees[2]="peter"; //can be accessed outside of class //after adding parivate generate error
it1.printEmployeeInfo();

