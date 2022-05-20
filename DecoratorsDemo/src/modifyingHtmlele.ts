function Logger2(logString:string){
    return function(constructor:Function){
        console.log(logString)
        console.log(constructor)
    }
    
}
//output : 'My Person Object' as HTML content
// function WithTemplate(template:string,hookId:string){
//     //_ aware of argument but not using
// return function(_:Function){
//     const hook1=document.getElementById(hookId);
//     if(hook1){
//         hook1.innerHTML=template
//     }
// }
// }

//output : 'shylaja' as HTML content

function WithTemplate(template:string,hookId:string){
return function(constructor:any){
    const p=new constructor();
    const hook1=document.getElementById(hookId);
    if(hook1){
        hook1.innerHTML=template
        hook1.querySelector('h2')!.textContent=p.name;
    }
}
}

@WithTemplate('<h2>My Person Object</h2>','app')
class Person2{
    name="shylaja"
    constructor(){
        console.log("creating person object")
    }
}

const p2=new Person2();
console.log(p2)