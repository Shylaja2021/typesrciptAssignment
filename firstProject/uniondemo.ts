type Combinable=number|string; 
type CombineDesc="as-number"|"as-text"; // literal can hv oly these two values
function combine(
    n1: Combinable, //reusable type alias
    n2: number|string,
    resultConversion: CombineDesc //"as-number"|"as-text"  //resultConversion:string 
    ) {
    let result;
    if(typeof n1 ==='number'&& typeof n2==='number' ||resultConversion==='as-number'){
        result = +n1 + +n2;
    }
 else{
     result=n1.toString()+n2.toString();
 }

  return result;
//   if(resultConversion==="as-number"){
//       return +result;
//      // return parseFloat(result);
//   }
//   else{
//       return result.toString();
//   }
}

const combineAges=combine(20,30,"as-number");
console.log(combineAges);

const combineStringAges=combine("aa","30","as-number");
console.log(combineStringAges);

// const combineStringAges=combine("aa","30","as-number"); //output :NAN not a number
// console.log(combineStringAges);


const combineNames=combine("shylaja"," R","as-text");
console.log(combineNames);


// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To:

// type User = { name: string; age: number };
 
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }