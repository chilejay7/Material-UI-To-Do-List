import { ListItem, TextField, InputAdornment, IconButton } from "@mui/material";
import Create from "@mui/icons-material/Create";
import { useState } from "react";


export default function TodoForm() {

    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    return (
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
    )
}

// <OutlinedInput
//             id="outlined-adornment-password"
//             type={showPassword ? 'text' : 'password'}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />