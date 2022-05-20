function Logger1(logString:string){
    return function(constructor:Function){
        console.log(logString)
        console.log(constructor)
    }
    
}

@Logger1('Logging - Person')
class Person1{
    name="shylaja"
    constructor(){
        console.log("creating person object")
    }
}

const p1=new Person1();
console.log(p1)