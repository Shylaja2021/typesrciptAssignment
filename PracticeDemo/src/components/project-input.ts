import Component from '../components/base-component'
import * as Validate from '../util/validation'
import {autobind as Autobind} from '../decorators/autobind'
import {projectState} from '../state/project-state'
 

    //projectInput class
    export class ProjectInput extends Component<HTMLDivElement,HTMLFormElement> {
     titleInputElement: HTMLInputElement;
     descriptionInputElement: HTMLInputElement;
     peopleInputElement: HTMLInputElement;
     constructor() {
       super("project-input","app",true,"user-input");
       this.titleInputElement = this.element.querySelector(
         "#title1"
       ) as HTMLInputElement;
       this.descriptionInputElement = this.element.querySelector(
         "#description"
       ) as HTMLInputElement;
       this.peopleInputElement = this.element.querySelector(
         "#people"
       ) as HTMLInputElement;
     
       this.configure();
       
     }
     configure() {
       this.element.addEventListener("submit", this.handleSubmit);
     }
     renderContent(): void {
       
     }
     private gatherUserInput(): [string, string, number] | void {
       const enteredTiltle = this.titleInputElement.value;
       const enteredDescription = this.descriptionInputElement.value;
       const enteredPeople = this.peopleInputElement.value;
   
       const titleValidatable: Validate.Validatable = {
         value: enteredTiltle,
         required: true,
       };
       const descriptionValidatable: Validate.Validatable = {
         value: enteredDescription,
         required: true,
         minLength: 5,
       };
       const peopleValidatable: Validate.Validatable = {
         value: +enteredPeople,
         required: true,
         min: 1,
         max: 5,
       };
       //   if(enteredTiltle.trim().length===0||enteredDescription.trim().length===0||enteredPeople.trim().length===0){
       if (
         !Validate.validate(titleValidatable) ||
         !Validate.validate(descriptionValidatable) ||
         !Validate.validate(peopleValidatable)
       ) {
         alert("Invalid Input");
         return;
       } else {
         return [enteredTiltle, enteredDescription, +enteredPeople];
       }
     }
     private clearInputs() {
       this.titleInputElement.value = "";
       this.descriptionInputElement.value = "";
       this.peopleInputElement.value = "";
     }
     @Autobind
     private handleSubmit(event: Event) {
       event.preventDefault();
       const userInput = this.gatherUserInput();
       if (Array.isArray(userInput)) {
         const [title, description, people] = userInput;
         projectState.addProject(title,description,people);
         //console.log(title, description, people);
         this.clearInputs();
       }
       // console.log(this.titleInputElement.value)
       // console.log(this.descriptionInputElement.value)
       // console.log(this.peopleInputElement.value)
     }
   
     
     
   } 
