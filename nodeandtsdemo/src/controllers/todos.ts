import {RequestHandler} from 'express'
import { Todo } from '../models/todo';
const TODOS:Todo[]=[];

export const createToDo:RequestHandler=(req,res,next)=>{
    const text=(req.body as {text:string}).text;
    const newTodo=new Todo(Math.random().toString(),text);
    TODOS.push(newTodo);
    res.status(201).json({message:'created the todo...',createdTodo:newTodo})
};

export const getToDos:RequestHandler=(req,res,next)=>{
  
    res.json({todos:TODOS})
};

export const updateTodo:RequestHandler<{id:string}>=(req,res,next)=>{
    const todoId=req.params.id;
    const updatedText=(req.body as {text:string}).text;
    const todoIndex=TODOS.findIndex(todo=>todo.id===todoId);
    if(todoIndex){
        throw new Error('could not find todo');
    }
    TODOS[todoIndex]=new Todo(TODOS[todoIndex].id,updatedText);
    res.json({message:'updated',updateTodo:TODOS[todoIndex]})
}

export const deleteTodo:RequestHandler<{id:string}>=(req,res,next)=>{
    const todoId=req.params.id;
    
    const todoIndex=TODOS.findIndex(todo=>todo.id===todoId);
    if(todoIndex){
        throw new Error('could not find todo');
    }
    TODOS.splice(todoIndex,1)
    res.json({message:'todo deleted'})
}