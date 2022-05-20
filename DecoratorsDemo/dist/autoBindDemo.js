"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Loggera3(logString) {
    console.log("Logging");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
//if u instantiate den oly executes else wont
function WithTemplatea1(template, hookId) {
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
let Person4 = class Person4 {
    constructor() {
        this.name = "shylaja";
        console.log("creating person object");
    }
};
Person4 = __decorate([
    Loggera3("Logger - Person"),
    WithTemplatea1('<h2>My Person Object</h2>', 'app')
], Person4);
const p4 = new Person4();
console.log(p4);
function Loga2(target, name, descriptor) {
    console.log("Access Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Loga3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
class Product1 {
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
    Loga2
], Product1.prototype, "Price", null);
__decorate([
    Loga3
], Product1.prototype, "getPriceWithTax", null);
function Autobinding(target, mathodName, descriptor) {
    const original = descriptor.value;
    const adDesc = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = original.bind(this);
            return boundFn;
        }
    };
    return adDesc;
}
class Printer {
    constructor() {
        this.message = "this works";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobinding
], Printer.prototype, "showMessage", null);
const pr = new Printer();
const button = document.querySelector('button');
//button.addEventListener("click",pr.showMessage.bind(pr)) //javascript
button.addEventListener("click", pr.showMessage); //using descri
