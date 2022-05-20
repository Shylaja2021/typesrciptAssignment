"use strict";
console.log("hello");
const button = document.querySelector('button');
//const button=document.querySelector('button'); //strictNullChecks:false
button.addEventListener('click', () => {
    console.log("clicked!!!!");
});
//can place in if condition 
const button1 = document.querySelector('button');
if (button1) {
    button.addEventListener('click', () => {
        console.log("clicked!!!!");
    });
}
//"strictBindCallApply": false //no overload method matches error vll b resolved
const button2 = document.querySelector('button');
function handleClick(message) {
    console.log("clicked!!!!");
}
if (button2) {
    button.addEventListener('click', handleClick.bind(null, "welcome"));
}
//# sourceMappingURL=app.js.map