"use strict";
//interface
// interface Admin{
//     name:string;
//     prevelages:string[];
// }
const e1 = {
    name: 'max',
    prevelages: ["create-server"],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printUnkown(emp) {
    console.log("Name : " + emp.name); //name exists in both type
    //console.log(emp.previlages)//doesnt work bcoz emp not sure bcoz which type is assigned
    // if(typeof emp==='Admin'){ //it also wont work bcoz typeof returns object  typeof emp==='object'
    //console.log(emp.prevelages)
    // }
    if ('prevelages' in emp) {
        console.log("Previlages : " + emp.prevelages);
    }
    if ('startDate' in emp) {
        console.log("Start Date : " + emp.startDate);
    }
}
printUnkown(e1);
printUnkown({ name: "mau", startDate: new Date(), prevelages: ["admin"] });
class Car {
    drive() {
        console.log("driving ......");
    }
}
class Truck {
    drive() {
        console.log("driving a truck ......");
    }
    loadCargo(amt) {
        console.log("load cargo amount " + amt);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(1000)
    // }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("moving at speed : ", speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 200 });
moveAnimal({ type: 'horse', runningSpeed: 1000 });
//typecast
//const userinput=<HTMLInputElement>document.getElementById('u')! //first approach
//const userinput1=document.getElementById("u")! as HTMLInputElement; //second approach
const userinput1 = document.getElementById("u");
console.log("userinput ", userinput1);
if (userinput1) {
    userinput1.value = "hi";
}
const errBag = {
    email: 'not a valid email',
    userName: 'must start with char'
};
console.log(errBag);
//# sourceMappingURL=intersectionDemo.js.map