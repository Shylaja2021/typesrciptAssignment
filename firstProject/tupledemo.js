// const person1:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string]; //speacial array with exactly two types of elements
// }={
//     name:'shylaja',
//     age:25,
//     hobbies:["sports","cooking"],
//     role:[1,"Admin"]
// }
// console.log(person1.role)
// person1.role.push("user")// typescript cant catch dis ,push add element at end
// console.log(person1.role)
// person1.role[0]=100;
// person1.role[1]="author"
// console.log(person1.role)
var employee = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
employee.push("true");
console.log(employee[0]);
employee.push("naveen", "naveen1");
console.log(employee);
console.log(employee.length);
employee[0] = 120;
employee[1] = "dds";
console.log("after =====" + employee);
// //ENUm demo
// enum Role{ADMIN,READ_ONLY,AUTHOR};
// const person1={
//     name:'shylaja',
//     age:25,
//     hobbies:["sports","cooking"],
//     role:Role.AUTHOR
// }
// console.log(person1.role);
// if(person1.role==Role.ADMIN){
//     console.log("is admin")
// }
