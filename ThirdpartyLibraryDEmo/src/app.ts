// import _ from 'lodash'
// declare var GLOBAL:any;
// console.log(_.shuffle([1,2,4,3,6,9]));
// console.log("demooo")
// console.log("demooo")
// console.log(GLOBAL);
import 'reflect-metadata';
import {plainToClass} from 'class-transformer'
import { Product } from "./product.model";
import { validate } from 'class-validator';


const prod=[{name:'Book',price:12},{name:'pen',price:10}]

//const p=new Product('Book',12);
//console.log(p.getInfo());


// const prodlist=prod.map(p=>{
//     return new Product(p.name,p.price);
// });
// for (const p of prodlist){
//     console.log(p.getInfo()); 
// }

const prodlist=plainToClass(Product,prod);

for (const p of prodlist){
    console.log(p.getInfo()); 
}

// const newProd=new Product('',-12000);
// console.log(newProd.getInfo()); //this will print output no error

const newProd=new Product('',-12000);
validate(newProd).then(errors=>{
    if(errors.length>0){
        console.log("VALIDATION ERRORS");
        console.log(errors)
    }
else{
    console.log(newProd.getInfo());
}
})
