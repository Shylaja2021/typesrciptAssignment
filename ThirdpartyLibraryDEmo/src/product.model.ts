//without validator
// export class Product{
// name:string;
// price:number;
// constructor(n:string,p:number){
//     this.name=n;
//     this.price=p;
// }

// getInfo(){
//     return [this.name,`$${this.price}`]
// }
// }
import {IsNotEmpty,IsPositive,IsNumber} from 'class-validator'
export class Product{
    @IsNotEmpty()
    name:string;
    @IsNumber()
    @IsPositive()
    price:number;
    constructor(n:string,p:number){
        this.name=n;
        this.price=p;
    }
    
    getInfo(){
        return [this.name,`$${this.price}`]
    }
    }