import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import UserNameForm from './UsernameForm'
import ShoppingListForm from './ShoppingListForm'
import ShoppingList from './ShoppingList'
import EffectCounter from './EffectCounter'
import Quote from './Quote'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

function App() {

  const clickHandler = (e) => {
    if (e.target.tagName === 'BUTTON') {
      alert('Button clicked!');
    }
  }

  const [score, setScore] = useState(3);

  return (
    <>
      <h1>State Demo</h1>
      {/* <UserNameForm />
    <Counter />
    <Dumbo /> */}

      <Stack spacing={2} direction="row" onClick={clickHandler}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

    <div>
      <h1>Current Score: {score}</h1>
      <Rating
        name="simple-controlled"
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue);
        }}
      />
      </div>
      {/* <ShoppingList />
    <EffectCounter />
    <Quote /> */}
      {/* <ShoppingListForm /> */}
    </>
  )
}

export default App
