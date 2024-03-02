import { useState, useEffect } from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";


const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (!data) return [];
    return data;
}

const initialTodos = [
    { id: uuidv4(), text: "eat breakfast", completed: false },
    { id: uuidv4(), text: "walk the dog", completed: true },
    { id: uuidv4(), text: "cook dinner", completed: true },
    { id: uuidv4(), text: "study", completed: false },
]

export default function TodoList() {

    const [todos, setToDos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const removeTodo = (id) => {
        setToDos(prevTodos => {
            return prevTodos.filter(t => t.id != id)
        })
    }

    const toggleTodo = (id) => {
        setToDos(prevTodos => {
           return prevTodos.map(todo => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => {
        setToDos(prevTodos => {
           return [...prevTodos,  { id: uuidv4(), text: text, completed: false }];
        })
    }

    return (
        <>
        <h1> To Do List</h1>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {

               return <TodoItem key={todo.id} todo={todo} remove={removeTodo} toggle={() => toggleTodo(todo.id)} />

            }
            )}

            <TodoForm addTodo={addTodo} />
        </List>

        </>
    )
}