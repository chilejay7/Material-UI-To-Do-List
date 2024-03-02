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

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {

               return <TodoItem todo={todo} key={todo.id} />

            }
            )}

        </List>
    )
}