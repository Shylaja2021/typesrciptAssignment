// const person:object={
//     name:'shylaja',
//     age:25
// }
// console.log(person)
// const person1={
//     name:'shylaja',
//     age:25
// }
//console.log(person1.name)
// const person1:{
//     name:string;
//     age:number
// }={
//     name:'shylaja',
//     age:25
// }
// console.log(person1.name)
//nested object
// const product1:{
//     id: string;
//     price: number;
//     tags: string[];
//     details: {
//       title: string;
//       description: string;
//     }
//   }= {
//     id: 'abc1',
//     price: 12.99,
//     tags: ['great-offer', 'hot-and-new'],
//     details: {
//       title: 'Red Carpet',
//       description: 'A great carpet - almost brand-new!'
//     }
//   }
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!',
        sub_details: {
            sub_title: 'sub title red carpet',
            arr_demo: ["hi", 'Hello']
        }
    }
};
//   console.log(product.id)
//   console.log(product.tags)
//   console.log(product.tags[0])
//   console.log(product.tags[1])
//   console.log(product.tags[2]) //undefined
console.log(product.details.title);
console.log(product.details.sub_details.sub_title);
console.log(product.details.sub_details.arr_demo[0]);
//for of iterates over values
for (var _i = 0, _a = product.tags; _i < _a.length; _i++) {
    var tag = _a[_i];
    console.log(tag);
}
//for in iterates over key
for (var tag in product.tags) {
    console.log(product.tags[tag]);
}
//array
var favact;
//   favact=[];
//   favact[0]="sports1"; //['sports1']
favact = ["sports", "trekking"]; //['sports2']
//   favact[1]="sports1"; //['sports2', 'sports1']
//favact=["sports",2] //cant assign number type values
console.log(favact);
var demoarr;
demoarr = ["sample", 2]; //type s any, it will accept all type of values
console.log(demoarr);
