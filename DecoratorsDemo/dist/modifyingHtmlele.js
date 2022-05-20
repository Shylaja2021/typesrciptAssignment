"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger2(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
//output : 'My Person Object' as HTML content
// function WithTemplate(template:string,hookId:string){
//     //_ aware of argument but not using
// return function(_:Function){
//     const hook1=document.getElementById(hookId);
//     if(hook1){
//         hook1.innerHTML=template
//     }
// }
// }
//output : 'shylaja' as HTML content
function WithTemplate(template, hookId) {
    return function (constructor) {
        const p = new constructor();
        const hook1 = document.getElementById(hookId);
        if (hook1) {
            hook1.innerHTML = template;
            hook1.querySelector('h2').textContent = p.name;
        }
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "shylaja";
        console.log("creating person object");
    }
};
Person2 = __decorate([
    WithTemplate('<h2>My Person Object</h2>', 'app')
], Person2);
const p2 = new Person2();
console.log(p2);
