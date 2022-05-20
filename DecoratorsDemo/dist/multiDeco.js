"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger3(logString) {
    console.log("Logging");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// function WithTemplate1(template:string,hookId:string){
//     console.log("Template")
// return function(originalConstructor:any){
//     console.log("running template")
//     const p=new originalConstructor();
//     const hook1=document.getElementById(hookId);
//     if(hook1){
//         hook1.innerHTML=template
//         hook1.querySelector('h2')!.textContent=p.name;
//     }
// }
// }
//if u instantiate den oly executes else wont
function WithTemplate1(template, hookId) {
    console.log("Template");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super(); //saves original class
                console.log("running template");
                const hook1 = document.getElementById(hookId);
                if (hook1) {
                    hook1.innerHTML = template;
                    hook1.querySelector('h2').textContent = this.name;
                }
            }
        };
    };
}
//creates in the order mentioned top to bottom
//executes from bottom up,last one executes first
let Person3 = class Person3 {
    constructor() {
        this.name = "shylaja";
        console.log("creating person object");
    }
};
Person3 = __decorate([
    Logger3("Logger - Person"),
    WithTemplate1('<h2>My Person Object</h2>', 'app')
], Person3);
const p3 = new Person3();
console.log(p3);
//property decorator
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Access Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(name, price) {
        this.title = name;
        this._price = price;
    }
    set Price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Not a valid price");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log //executes when class is registered by js
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "Price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
