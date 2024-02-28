import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";

function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), product:"Bananas", quantity: 8 },
        { id: uuid(), product:"Eggs", quantity: 12 },
    ]);

    const addItem = (item) => {

        setItems(currItems => {
            return [
                // We make a copy of the items we already have using ...items
                // We then make a new object with the item passed into the function as an argument and add a unique id.
                // In production we would use something like uuid to generate a unique id.
                ...currItems, 
                { ...item, id: uuid() }
            ]
        })
    }

    return(
        <div>
            <ul>
                {items.map(i => <li key={i.id}>{i.product} - {i.quantity}</li>)}
            </ul>

            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}

export default ShoppingList;