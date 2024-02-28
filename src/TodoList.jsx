import { useState } from "react";

const initialTodos = [
    {id: 1, text: "walk the dog", completed: false },
    {id: 2, text: "walk the dog", completed: false },
    {id: 3, text: "walk the dog", completed: false },
    {id: 4, text: "walk the dog", completed: false },
]

export default function TodoList() {

    const [todos, setToDos] = useState(initialTodos);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => {
                const labelId = `checkbox-list-label-${todo}`;
            }
        )}

        </List>
    )
}