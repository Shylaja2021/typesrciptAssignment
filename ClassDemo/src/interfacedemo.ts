// type Person={
//     name:string;
//     age:number
//     greet(phrase:string):void; 
// }

//type Addfn=(a:number,b:number)=>number;
interface Addfn{
    (a:number,b:number):number;
}
let Add:Addfn;
Add=(n1:number,n2:number)=>{
    return n1+n2;
}

interface Named{
    readonly name?:string;
    age?:number; //optional classes can implement it it or can skip it
}
//allows define structure of an object
interface Greetable extends Named{
    //name:string="max" //generates error //cant initialize
    //cant add private/public access modifier can hv only readonly
    //private name:string
    //public name:string
    //readonly name:string; //cant change after initialization
   // age:number
    greet(phrase:string):void;
}

class Person implements Greetable{
    name?: string;
    age=50;
    constructor(name?:string){
        if(name){
             this.name=name
        }
       
    }
    greet(phrase: string): void {
        if(this.name)
        {
            console.log(phrase+' '+this.name)
        }
        else{
            console.log("hiiii");
        }
    }
}
//let user1:Person;
// user1={
//     name:'max',
//     //age:10,
//     greet(phrase:string){
//         console.log(phrase+' '+this.name);
//     }
// }
// let user1:Greetable
// user1=new Person("mini")
//let user1=new Person("MAX");
let user1=new Person();
user1.greet("hi there!!im ")
console.log(user1)