class Department{
    //name:string='DEFAULT';
    name:string;
    //constructor reserved keyword,initialize object
    constructor(n:string){
        this.name=n;
    }
    describe(this:Department){
        console.log("Department: "+this.name);
    }
}

const it=new Department("IT");
console.log(it)
it.describe();

const itcopy={name:'DUMMY',describe:it.describe};
itcopy.describe();//undefined