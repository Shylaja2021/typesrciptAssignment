"use strict";
//type connected to another type
//built in
const names = [];
//names[0].split(' ');
//promises //js type
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is done");
    }, 2000);
});
//custom
// function merge(obja:object,objb:object){
//     return Object.assign(obja,objb)
// }
// console.log(merge({name:"shylaja"},{age:25}))
// const mo=merge({name:"shylaja"},{age:25})
// mo.name //generates error cant access name or age
function merge(obja, objb) {
    return Object.assign(obja, objb);
}
console.log(merge({ name: "shylaja" }, { age: 25 }));
//const mo=merge({name:"shylaja",hobbies:["cooking"]},{age:25})
const mo = merge({ name: "shylaja", hobbies: ["cooking"] }, { age: 25 });
console.log(mo.name);
//not passsing age key
const mo1 = merge({ name: "shylaja", hobbies: ["cooking"] }, 25); //this wont generate any err but even 25 is passed but it is assigned as age
console.log(mo1);
//constraints
// function merge1<T extends object,U extends object>(obja:T,objb:U){
//     return Object.assign(obja,objb)
// }
// const mo2=merge1({name:"shylaja",hobbies:["cooking"]},25) //now generate error
// console.log(mo1) 
function merge1(obja, objb) {
    return Object.assign(obja, objb);
}
const mo2 = merge1({ name: "shylaja", hobbies: ["cooking"] }, { age: 25 });
console.log(mo2);
function count(element) {
    let desc = "got no value";
    if (element.length === 1) {
        desc = "got one value";
    }
    else if (element.length > 1) {
        desc = "got " + element.length + " elements";
    }
    return [element, desc];
}
console.log(count("hi there"));
console.log(count(["hi", "there"]));
console.log(count([]));
// function extractandconvert(obj:object,key:string){
// return obj[key]; //generates error
// }
//extractandconvert({},'name')
function extractandconvert(obj, key) {
    return obj[key];
}
extractandconvert({ name: 'shylaja' }, 'name');
//generic Classes
//objects not allowed
class StoreData {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeitem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const sd = new StoreData();
sd.addItem("hi");
sd.addItem("hello");
console.log(sd.getItems());
sd.removeitem("hi");
console.log(sd.getItems());
//partial makes prop optional
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title,
        courseGoal.description = description,
        courseGoal.completeUntil = date;
    return courseGoal;
}
//can add element
const namesdemo = ["max", "ana"];
namesdemo.push("peter");
//cant add element
const namesdemo1 = ["max", "ana"];
//namesdemo1.push("peter")//error push doesnt exist on readonly//not able to change
//# sourceMappingURL=genericsDemo.js.map