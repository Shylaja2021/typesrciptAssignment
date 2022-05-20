"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getToDos = exports.createToDo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createToDo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'created the todo...', createdTodo: newTodo });
};
exports.createToDo = createToDo;
const getToDos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getToDos = getToDos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex) {
        throw new Error('could not find todo');
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'updated', updateTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex) {
        throw new Error('could not find todo');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'todo deleted' });
};
exports.deleteTodo = deleteTodo;
