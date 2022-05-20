function Loggera3(logString:string){
    console.log("Logging")
    return function(constructor:Function){
        console.log(logString)
        console.log(constructor)
    }
    
}

//if u instantiate den oly executes else wont
function WithTemplatea1(template:string,hookId:string){
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
@Loggera3("Logger - Person")
@WithTemplatea1('<h2>My Person Object</h2>','app')
class Person4{
    name="shylaja"
    constructor(){
        console.log("creating person object")
    }
}

const p4=new Person4();
console.log(p4)



function Loga2(target:any,name:string,descriptor:PropertyDescriptor){
console.log("Access Decorator")
console.log(target)
console.log(name)
console.log(descriptor)
}
function Loga3(target:any,name:string|Symbol,descriptor:PropertyDescriptor){
    console.log("Method Decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)
    }

   

class Product1{
   
    title:string;
    private _price:number;
    constructor(name:string,price:number){
this.title=name;
this._price=price;
    }
    @Loga2
    set Price(val:number){
       if(val>0){
           this._price=val;
       }
       else{
           throw new Error("Not a valid price")
       }
    }
    @Loga3
    getPriceWithTax(tax:number){
        return this._price*(1+tax);
    }
}

function Autobinding(target:any,mathodName:string,descriptor:PropertyDescriptor){
const original=descriptor.value;
const adDesc:PropertyDescriptor={
configurable:true,
enumerable:false,
get(){
    const boundFn=original.bind(this);
    return boundFn;
}

}
return adDesc;
}

class Printer{
    message="this works";
    @Autobinding
    showMessage(){
        console.log(this.message)
    }
}
const pr=new Printer();
const button=document.querySelector('button')!;
//button.addEventListener("click",pr.showMessage.bind(pr)) //javascript
button.addEventListener("click",pr.showMessage) //using descri