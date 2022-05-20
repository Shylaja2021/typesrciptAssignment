import { Router } from "express";
import { createToDo,getToDos,updateTodo,deleteTodo } from "../controllers/todos";
const router=Router();

router.post('/',createToDo);

router.get('/',getToDos);

router.patch('/:id',updateTodo);

router.delete('/:id',deleteTodo);

export default router;