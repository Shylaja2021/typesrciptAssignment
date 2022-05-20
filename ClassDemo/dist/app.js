"use strict";
class Department {
    //constructor reserved keyword,initialize object
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
}
const it = new Department("IT");
console.log(it);
it.describe();
const itcopy = { name: 'DUMMY', describe: it.describe };
itcopy.describe(); //undefined
//# sourceMappingURL=app.js.map