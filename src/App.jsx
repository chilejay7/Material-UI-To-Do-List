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

function App() {


  return (
    <>
    <h1>State Demo</h1>
    {/* <UserNameForm />
    <Counter />
    <Dumbo /> */}

    <ShoppingList />
    <EffectCounter />
    <Quote />
    {/* <ShoppingListForm /> */}
    </>
  )
}

export default App
