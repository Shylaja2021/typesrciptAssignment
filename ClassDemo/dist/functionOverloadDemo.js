"use strict";
var _a;
function add1(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const res = add1("ram", " sam");
res.split(" ");
const res1 = add1(2, 3);
//optional chaining
const fetchUserData = {
    id: "e1",
    name: 'shylaja',
    job: { title: "CEO", description: "My Own Company" }
};
console.log(fetchUserData.job.title);
console.log(fetchUserData.job && fetchUserData.job.title);
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title); //optional chaining
//nullish coalescing
const userinput = '';
const storedt = userinput || "DEFAULT";
const userinput2 = '';
const storedt1 = userinput2 !== null && userinput2 !== void 0 ? userinput2 : "DEFAULT"; //nullish coalescing onllly for undefined
console.log(storedt);
console.log(storedt1);
//# sourceMappingURL=functionOverloadDemo.js.map