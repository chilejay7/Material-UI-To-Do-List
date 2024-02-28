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

function App() {

  const clickHandler = (e) => {
    if(e.target.tagName === 'BUTTON') {
      alert('Button clicked!');
    }
  }

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

      {/* <ShoppingList />
    <EffectCounter />
    <Quote /> */}
      {/* <ShoppingListForm /> */}
    </>
  )
}

export default App
