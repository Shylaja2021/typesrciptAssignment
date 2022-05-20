import React,{useState} from 'react';
import ToDoList from './Components/ToDoList';
import NewToDo from './Components/NewToDo';
import {ToDo} from './todo.model'
import {Route} from 'react-router-dom'

function App() {
  const [todos,setTodos]=useState<ToDo[]>([]);

  const todoAddHandler=(text:string)=>{
    // console.log(text)
    setTodos(prevTodos=>[...prevTodos,{id:Math.random().toString(),text:text}]);
  }

const todoDeleteHandler=(todoId:string)=>{
  setTodos(prevTodos=>{
    return prevTodos.filter(todo=>todo.id!==todoId);
  });
}

  return (
    <div className="App">
      {/* A component that adds todos */}
      <NewToDo onAddToDo={todoAddHandler}/>
     <ToDoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
