//type inference: no need to define datatype before ,by using assigned value the datatype will be stored
var n1 = 5; //here 5 is integer so,the datatype of n1 will be number
console.log("n1 : " + typeof n1);
var n2 = '5'; //here 5 is string so,the datatype of n2 will be string
console.log("n2 : " + typeof n2);
var number1;
number1 = 3; //need to store only number
var number2;
number2 = "5"; //can store any type because data type is not defined
console.log("number2 : " + typeof number2);
number2 = 5;
console.log("number2 : " + typeof number2);
