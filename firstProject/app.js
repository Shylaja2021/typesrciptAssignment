// console.log("demo")
// const button=document.querySelector("button");
// const input1=document.getElementById("num1")! as HTMLInputElement;
// const input2=document.getElementById("num2")! as HTMLInputElement;
// function add(num1:number,num2:number){
//     return num1+num2;
// }
// button.addEventListener("click",function(){
//     console.log(add(+input1.value,+input2.value));
// })
function add(n1, n2, showResult, phrase) {
    //console.log(typeof(n1));
    //    if(typeof n1!=='number' || typeof n2!=='number'){
    //        throw new Error("Incorrect input")
    //    }
    var result = n1 + n2;
    if (showResult) {
        //console.log(phrase+(n1 + n2));
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 7.8;
var printResult = true;
var resultPhase = "Result is : ";
var result = add(number1, number2, printResult, resultPhase);
console.log("Result : ", result);
