"use strict";
//enforce child class to implement parent class abstract method 
class Department5 {
    display() {
        console.log("abstract class can also have concrete method");
    }
}
class ITDept extends Department5 {
    constructor(id, name) {
        super();
    }
    describe() {
        console.log("IT Dept--------desc");
    }
    static getInstance() {
        if (ITDept.instance) {
            return ITDept.instance; //this.instance
        }
        this.instance = new ITDept("D001", "IT1");
        return this.instance;
    }
}
//const d=new Department5(); //cant instantiate abstract class
// const itobj=new ITDept("D001","IT1"); //cant  instantiate bcoz constructor is private
// itobj.describe()
// itobj.display()
const itd = ITDept.getInstance();
const itd1 = ITDept.getInstance();
console.log(itd, itd1);
//# sourceMappingURL=abstractDemo.js.map