// //return type number
// function add(n1:number,n2:number){
//     return n1+n2;
// }

// //return type string
// function add1(n1:number,n2:string){
//     return n1+n2;
// }

// //return type string
// function add3(n1:number,n2:number){
//     return n1.toString()+n2.toString();
// }

// //explicitly mentioning return type number
// function add4(n1:number,n2:number):number{
//     return n1+n2;
// }

// //yields error bcoz number implicitly cant convert to string
// // function add5(n1:number,n2:number):string{
// //     return n1+n2;
// // }

// //no error
// function add6(n1:number,n2:number):string{
//     return n1.toString()+n2.toString();
// }

function add6(n1:number,n2:number){
    return n1+n2;
}

//void return type
function printResult(num:number){
    console.log("Result : "+num);
}

function printResult1(num:number):undefined{
    console.log("Result : "+num);
    return; //retrun nothing means undefined
}

printResult(add6(20,30)); //50

console.log(printResult(add6(20,30))) //undefined

//undefined is a type
let s=undefined

//storing function to another variable

let combineValues;

combineValues=add6;

console.log(combineValues(2,3))

//since combineValues is of type any, any value can be assigned like
//combineValues=5 //causes run time error

let combineValues1:Function;

combineValues1=add6;
//combineValues1=6 compile tym error cant assign number to function

console.log(combineValues1(2,3))


//function type

let x:(a:number,b:number)=>number;

//x=printResult;//error cant assign
x=add6; //no error because add match with funtion type in line no.73

console.log(x(2,3));

function addAndHandle(n1:number,n2:number,cb:(num:number)=>void){
const result=n1+n2;
cb(result)
}

addAndHandle(100,20,(result)=>{
console.log(result)
})