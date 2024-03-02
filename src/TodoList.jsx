import { useState } from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem";



const initialTodos = [
    { id: 1, text: "eat breakfast", completed: false },
    { id: 2, text: "walk the dog", completed: true },
    { id: 3, text: "cook dinner", completed: true },
    { id: 4, text: "study", completed: false },
]

export default function TodoList() {


    const [todos, setToDos] = useState(initialTodos);

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

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {

               return <TodoItem key={todo.id} todo={todo} remove={removeTodo} toggle={() => toggleTodo(todo.id)} />

            }
            )}

        </List>
    )
}