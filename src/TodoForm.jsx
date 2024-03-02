import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material";
import Create from "@mui/icons-material/Create";
import { useState } from "react";


export default function TodoForm({ addTodo }) {

    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <form onSubmit={ handleSubmit }>
            <ListItem>
                <TextField id="filled-basic" label="Filled" variant="filled" onChange={handleChange} value={text}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </ListItem>
        </form>
    );
}