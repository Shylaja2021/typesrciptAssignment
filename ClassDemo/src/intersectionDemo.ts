//interface
// interface Admin{
//     name:string;
//     prevelages:string[];
// }

// interface Employee{
//     name:string;
//     startDate:Date;
// }
// interface ElevatedEmployee extends Admin,Employee{};


type Admin={
    name:string;
    prevelages:string[];
}

type Employee={
    name:string;
    startDate:Date;
}
type ElevatedEmployee=Admin & Employee;

const e1:ElevatedEmployee={
    name:'max',
    prevelages:["create-server"],
    startDate:new Date()
}

type Combinable=number|string
type Numeric=number|boolean

type universal=Combinable & Numeric //intersection

function add(a:Combinable,b:Combinable){
    if(typeof a === 'string'||typeof b==='string'){
        return a.toString()+b.toString();
    }
    return a+b;
}

type UnknownEmployee=Admin|Employee;

function printUnkown(emp:UnknownEmployee){
console.log("Name : "+emp.name) //name exists in both type
//console.log(emp.previlages)//doesnt work bcoz emp not sure bcoz which type is assigned
// if(typeof emp==='Admin'){ //it also wont work bcoz typeof returns object  typeof emp==='object'
     //console.log(emp.prevelages)
// }
if('prevelages' in emp){
    console.log("Previlages : "+emp.prevelages)
}
if('startDate' in emp){
    console.log("Start Date : "+emp.startDate)
}
}

printUnkown(e1);

printUnkown({name:"mau",startDate:new Date(),prevelages:["admin"]})

class Car{
    drive(){
        console.log("driving ......")
    }
}

class Truck{
    drive(){
        console.log("driving a truck ......")
    }
    loadCargo(amt:number){
        console.log("load cargo amount "+amt)
    }
}

type Vehicle=Car|Truck

const v1=new Car()
const v2=new Truck()

function useVehicle(vehicle:Vehicle){
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(1000)
    // }
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1);
useVehicle(v2);
//descriminated unions //common property type,which describes obj
interface Bird{
    type:"bird"
    flyingSpeed:number
}
interface Horse{
    type:"horse"
    runningSpeed:number
}

type Animal=Bird|Horse

function moveAnimal(animal:Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed=animal.flyingSpeed
            break;
        case 'horse':
            speed=animal.runningSpeed
            break;
    }
    console.log("moving at speed : ",speed);
}

moveAnimal({type:'bird',flyingSpeed:200})
moveAnimal({type:'horse',runningSpeed:1000})

//typecast

//const userinput=<HTMLInputElement>document.getElementById('u')! //first approach
//const userinput1=document.getElementById("u")! as HTMLInputElement; //second approach
const userinput1=document.getElementById("u")!;
console.log("userinput ",userinput1)
if(userinput1){
    (userinput1 as HTMLInputElement).value="hi";
}

//indexing
interface ErrorContainer{
    //id:string;
    [prop:string]:string
}

const errBag:ErrorContainer={
    email:'not a valid email',
    userName:'must start with char'
}

console.log(errBag)