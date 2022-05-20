//type connected to another type
//built in
const names:Array<string>=[];
//names[0].split(' ');
//promises //js type

const promise:Promise<string>=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("this is done");
    },2000)
})

//custom

// function merge(obja:object,objb:object){
//     return Object.assign(obja,objb)
// }

// console.log(merge({name:"shylaja"},{age:25}))

// const mo=merge({name:"shylaja"},{age:25})
// mo.name //generates error cant access name or age

function merge<T,U>(obja:T,objb:U){
    return Object.assign(obja,objb)
}

console.log(merge({name:"shylaja"},{age:25}))

//const mo=merge({name:"shylaja",hobbies:["cooking"]},{age:25})
const mo=merge<{name:string,hobbies:string[]},{age:number}>({name:"shylaja",hobbies:["cooking"]},{age:25})
console.log(mo.name) 

//not passsing age key
const mo1=merge({name:"shylaja",hobbies:["cooking"]},25) //this wont generate any err but even 25 is passed but it is assigned as age

console.log(mo1) 

//constraints

// function merge1<T extends object,U extends object>(obja:T,objb:U){
//     return Object.assign(obja,objb)
// }

// const mo2=merge1({name:"shylaja",hobbies:["cooking"]},25) //now generate error
// console.log(mo1) 

function merge1<T extends object,U extends object>(obja:T,objb:U){
    return Object.assign(obja,objb)
}

const mo2=merge1({name:"shylaja",hobbies:["cooking"]},{age:25}) 
console.log(mo2) 

interface len{
    length:number
}
function count<T extends len>(element: T):[T,string]{
let desc="got no value";
if(element.length ===1){
    desc="got one value";
}else if(element.length >1){
    desc="got "+element.length+" elements";
}
return [element,desc]
}

console.log(count("hi there"))
console.log(count(["hi", "there"]))
console.log(count([]))

// function extractandconvert(obj:object,key:string){
// return obj[key]; //generates error
// }
//extractandconvert({},'name')

function extractandconvert<T extends object,U extends keyof T>(obj:T,key:U){
    return obj[key];
    }

extractandconvert({name:'shylaja'},'name')

//generic Classes
//objects not allowed
class StoreData<T extends string|number|boolean>{
private data:T[]=[];
addItem(item:T){
    this.data.push(item)
}
removeitem(item:T){
    if(this.data.indexOf(item)=== -1){
        return;
    }
    this.data.splice(this.data.indexOf(item),1);
}
getItems(){
    return [...this.data]
}
}

const sd=new StoreData<string>();
sd.addItem("hi")
sd.addItem("hello")
console.log(sd.getItems());
sd.removeitem("hi")
console.log(sd.getItems())

// const sd1=new StoreData<object>();
// sd1.addItem({name:"hi"})
// sd1.addItem({name:"hello"})
// console.log(sd1.getItems());
// sd1.removeitem({name:"hi"}) //removes lat item ie,hello bcoz dis arugumnt considered as new object and store in it diff address address mismatch
// console.log(sd1.getItems())

// //to overcome above error
// const obj={name:"world"}
// sd1.addItem(obj);
// sd1.removeitem(obj);

interface CourseGoal{
    title:string,
    description:string,
    completeUntil:Date
}
//partial makes prop optional
function createCourseGoal(title:string,
    description:string,
    date:Date):CourseGoal{
    let courseGoal:Partial<CourseGoal>={};
    courseGoal.title=title,
    courseGoal.description=description,
    courseGoal.completeUntil=date;
    return courseGoal as CourseGoal;
}

//can add element
const namesdemo=["max","ana"];
namesdemo.push("peter")

//cant add element

const namesdemo1:Readonly<string[]>=["max","ana"];
//namesdemo1.push("peter")//error push doesnt exist on readonly//not able to change