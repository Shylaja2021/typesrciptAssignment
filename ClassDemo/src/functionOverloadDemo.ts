type Combinable1=number|string
type Numeric1=number|boolean

type universal1=Combinable & Numeric //intersection

function add1(a:number,b:number):number;
function add1(a:string,b:string):string;
function add1(a:Combinable1,b:Combinable1){
    if(typeof a === 'string'||typeof b==='string'){
        return a.toString()+b.toString();
    }
    return a+b;
}

const res=add1("ram"," sam");
res.split(" ");
const res1=add1(2,3);

//optional chaining

const fetchUserData={
    id:"e1",
    name:'shylaja',
    job:{title:"CEO",description:"My Own Company"}
};

console.log(fetchUserData.job.title)
console.log(fetchUserData.job && fetchUserData.job.title)
console.log(fetchUserData?.job?.title) //optional chaining

//nullish coalescing
const userinput='';
const storedt=userinput||"DEFAULT";
const userinput2='';
const storedt1=userinput2??"DEFAULT" //nullish coalescing onllly for undefined
console.log(storedt)
console.log(storedt1)