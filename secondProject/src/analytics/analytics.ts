//console.log("hello")

//generates an error implicit any type
// function sendAnalytics(data){
//     console.log(data);
// }

let logged;
//2ways to fix it is 1.define type of parameter 2.set noImplicitAny to false
function sendAnalytics(data:string){
    console.log(data);
    logged=true;
    console.log(logged)
}

sendAnalytics("the data")