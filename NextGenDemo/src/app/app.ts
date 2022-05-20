const userName="shylaja"
//userName="dds" //const can not be reinitialized
// let age=12
// age=18

function add(n1:number,n2:number){
    let result=n1+n2;
    return result;
}

// if(age>12){
//     var isOld=true;
// }

// console.log(isOld) //true

// if(age>12){
//     let isOld=true;
// }

// console.log(isOld) //Uncaught ReferenceError: isOld is not defined

//arrow function

// const add1=(a:number,b:number)=>{
// return a+b;
// }

// console.log(add1(2,3))
//single statement den
//const add1=(a:number,b:number)=>a+b; //implicit return value
const add1=(a:number,b:number)=>a+b;

const printResult:(a:number|string)=>void=output=>console.log(output);
// const printResult=(output:string|number)=>{
//     console.log(output)
// }

printResult(add1(3,4))

const button=document.querySelector("button")
if(button){
    button.addEventListener("click",event=>console.log(event))
}

//default parameter //always should be at end

function add2(n1:number,n2:number=10){
    let result=n1+n2;
    console.log(result);
}
add2(4)

//spread operator
const hobbies=["sports","cooking"];
const activeHobbies=["hiking"]
//const activeHobbies=["hiking",..hobbies]
//activeHobbies.push(hobbies) //cant push array to array
activeHobbies.push(hobbies[0],hobbies[1])

activeHobbies.push(...hobbies)

const person={
    Firstname:"shylaja",
    age:18
}

const copiedPerson=person; //doesnt copy d content ..instead assign the memory address of person to copiedPerson
console.log(copiedPerson)
const copy={...person}
console.log(person)

//rest parameters
const add3=(...numbers:number[])=>{
    return numbers.reduce((curResult,curValue)=>{
        return curResult+curValue
    },0)
}

const addNumbers=add3(1,3,2,5,6.8);
console.log(addNumbers)

//array destructure

// const hobby1=hobbies[0];
// const hobby2=hobbies[1];

const [hobby1,hobby2,...remaining]=hobbies

console.log(hobbies,hobby1,hobby2)

const {Firstname:uname,age}=person

console.log(uname,age,person)