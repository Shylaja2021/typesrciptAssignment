function Logger(constructor:Function){
    console.log('Logging')
    console.log(constructor)
}
@Logger
class Person{
    name="shylaja"
    constructor(){
        console.log("creating person object")
    }
}

const p=new Person();
console.log(p)