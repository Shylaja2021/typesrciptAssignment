import React,{useRef} from "react";
import './NewToDo.css'

type NewToDoProps={
    onAddToDo:(todoText:string)=>void;
}
const NewToDo:React.FC<NewToDoProps>=props=>{
    const textInputRef=useRef<HTMLInputElement>(null);
    const todoSubmit=(event:React.FormEvent)=>{
event.preventDefault();
const enteredText=textInputRef.current!.value;
// console.log(enteredText);
props.onAddToDo(enteredText);
    }
    return <form onSubmit={todoSubmit}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">ADD TODO</button>
    </form>;

}

export default NewToDo