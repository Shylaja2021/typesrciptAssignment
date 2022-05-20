"use strict";
// import _ from 'lodash'
// declare var GLOBAL:any;
// console.log(_.shuffle([1,2,4,3,6,9]));
// console.log("demooo")
// console.log("demooo")
// console.log(GLOBAL);
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("./product.model");
const prod = [{ name: 'Book', price: 12 }, { name: 'pen', price: 5 }];
const prodlist = prod.map(p => {
    return new product_model_1.Product(p.name, p.price);
});
//const p=new Product('Book',12);
for (const p of prodlist) {
    console.log(p.getInfo());
}
