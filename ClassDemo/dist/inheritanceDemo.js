"use strict";
class Department3 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private employees:string[]=[];
        this.employees = [];
        //console.log(this.fiscalyear) //error
        //console.log(Department3.fiscalyear) //way to access ststic variable inside any method
    }
    //static method
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
//static variable
Department3.fiscalyear = 2022;
class ITDepartment extends Department3 {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountsDepartment extends Department3 {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("no report!!!!!!!");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("pass valid value!!!!!!!");
        }
        this.addReports(value);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee == "max") {
            return;
        }
        this.employees.push(employee);
    }
}
console.log("inheritance demo");
const emp1 = Department3.createEmployee("peter");
console.log(emp1, Department3.fiscalyear);
const it2 = new ITDepartment("D001", ["sam"]);
console.log(it2);
it2.describe();
it2.addEmployee("sam");
it2.addEmployee("ram");
//it1.employees[2]="peter"; //can be accessed outside of class //after adding parivate generate error
it2.printEmployeeInfo();
console.log("===========");
const acc = new AccountsDepartment("D002", []);
//console.log(acc.mostRecentReport) //uncaught Error: no report!!!!!!!
//acc.mostRecentReport=''; //Uncaught Error: pass valid value!!!!!!!
acc.mostRecentReport = 'year end report';
acc.addReports("something went to wrong....");
acc.printReports();
acc.addEmployee("max");
acc.addEmployee("mau");
acc.printEmployeeInfo();
console.log(acc.mostRecentReport);
//# sourceMappingURL=inheritanceDemo.js.map