let userInput:unknown;
let userName:string;
userInput=5;
userInput="hello"

if(typeof userInput==='string'){
    userName=userInput
}

//never returns anything
function generateError(message:string,code:number):never{
    throw{message:message,code:code}
    //while(true) //infinite loop
}

generateError("Not Found!!!",404);