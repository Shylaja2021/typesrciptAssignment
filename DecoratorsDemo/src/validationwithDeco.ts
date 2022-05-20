interface ValidatorConfig{
    [property:string]:{
        [validatableProp:string]:string[]
    }
}
const regValidators:ValidatorConfig={};
function Required1(target:any,propName:string){
   
regValidators[target.constructor.name]={
    ...regValidators[target.constructor.name],
    [propName]:['required']
}
}
function PositiveNumber(target:any,propName:string){
    regValidators[target.constructor.name]={
        ...regValidators[target.constructor.name],
        [propName]:['positive']
    }
}

function validate(obj:any){
const objValidatorConfig=regValidators[obj.constructor.name];
if(!objValidatorConfig){
    return true;
}
let isValid=true
for(const prop in objValidatorConfig){
    console.log(prop)
    for(const validator of objValidatorConfig[prop]){
        switch(validator){
            case 'required':
                isValid=isValid && !!obj[prop];
                break;
                case 'positive':
                    isValid=isValid && obj[prop]>0;
                    break;
        }
    }
}
return isValid;
}

class Course{
    @Required1
    title:string;
    @PositiveNumber
    price:number;
    constructor(t:string,p:number){
        this.title=t;
        this.price=p;
    }
}

const cform=document.querySelector('form')!;
cform.addEventListener('submit',event=>{
    event.preventDefault();
    const titleEl=document.getElementById("course-title") as HTMLInputElement;
    const priceEl=document.getElementById("course-price") as HTMLInputElement;

    const title=titleEl.value;
    const price=+priceEl.value;

    const crCourse=new Course(title,price)
    if(!validate(crCourse)){
alert("invalid input!!");
return;
    }
    console.log(crCourse)
})