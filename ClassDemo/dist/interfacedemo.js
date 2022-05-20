"use strict";
// type Person={
//     name:string;
//     age:number
//     greet(phrase:string):void; 
// }
let Add;
Add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.age = 50;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log("hiiii");
        }
    }
}
//let user1:Person;
// user1={
//     name:'max',
//     //age:10,
//     greet(phrase:string){
//         console.log(phrase+' '+this.name);
//     }
// }
// let user1:Greetable
// user1=new Person("mini")
//let user1=new Person("MAX");
let user1 = new Person();
user1.greet("hi there!!im ");
console.log(user1);
//# sourceMappingURL=interfacedemo.js.map