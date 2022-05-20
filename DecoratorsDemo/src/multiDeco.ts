function Logger3(logString:string){
    console.log("Logging")
    return function(constructor:Function){
        console.log(logString)
        console.log(constructor)
    }
    
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
function WithTemplate1(template:string,hookId:string){
    console.log("Template")
return function<T extends{new(...args:any[]):{name:string}}>(originalConstructor:T){
   
    return class extends originalConstructor{
        constructor(..._:any){
           super();  //saves original class
           console.log("running template")
           const hook1=document.getElementById(hookId);
           if(hook1){
               hook1.innerHTML=template
               hook1.querySelector('h2')!.textContent=this.name;
           } 
        }
       
    }
}
}

//creates in the order mentioned top to bottom
//executes from bottom up,last one executes first
@Logger3("Logger - Person")
@WithTemplate1('<h2>My Person Object</h2>','app')
class Person3{
    name="shylaja"
    constructor(){
        console.log("creating person object")
    }
}

const p3=new Person3();
console.log(p3)

//property decorator
function Log(target:any,propertyName:string){
console.log("Property Decorator")
console.log(target,propertyName)
}

function Log2(target:any,name:string,descriptor:PropertyDescriptor){
console.log("Access Decorator")
console.log(target)
console.log(name)
console.log(descriptor)
}
function Log3(target:any,name:string|Symbol,descriptor:PropertyDescriptor){
    console.log("Method Decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)
    }

    function Log4(target : any,name:string|Symbol,position:number){
        console.log("parameter Decorator")
        console.log(target)
        console.log(name)
        console.log(position)
    }

class Product{
    @Log  //executes when class is registered by js
    title:string;
    private _price:number;
    constructor(name:string,price:number){
this.title=name;
this._price=price;
    }
    @Log2
    set Price(val:number){
       if(val>0){
           this._price=val;
       }
       else{
           throw new Error("Not a valid price")
       }
    }
    @Log3
    getPriceWithTax(@Log4 tax:number){
        return this._price*(1+tax);
    }
}