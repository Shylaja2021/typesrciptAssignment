function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
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
var combineAges = combine(20, 30, "as-number");
console.log(combineAges);
var combineStringAges = combine("aa", "30", "as-number");
console.log(combineStringAges);
var combineNames = combine("shylaja", " R", "as-text");
console.log(combineNames);
