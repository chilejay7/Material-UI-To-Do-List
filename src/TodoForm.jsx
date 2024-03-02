import { ListItem, TextField } from "@mui/material";
import { useState } from "react";


export default function TodoForm() {

    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    return (
        <ListItem>
            <TextField id="filled-basic" label="Filled" variant="filled" onChange={handleChange} value={text} />
        </ListItem>
    )
}