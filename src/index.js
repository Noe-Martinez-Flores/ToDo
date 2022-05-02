
import './css/styles.css';
import {Todo, TodoList} from './classes'
import { crearToDoHtml } from './js/componentes';



export const todoList = new TodoList();

todoList.todos.forEach(crearToDoHtml);

console.log(todoList.todos);