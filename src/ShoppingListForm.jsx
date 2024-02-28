import { useState } from "react";

function ShoppingListForm({ addItem }) {
    // we need to initialize our state
    const [formData, setFormData] = useState({ product: "", quantity: 0 });

    const handleChange = (event) => {
        setFormData(currData => {
            return {
                ...currData,
                [event.target.name]: event.target.value,
            }
        })
    }

    // We can pass data up to a parent by executing a function that has been passed to a child.
    // To do this we use the addItem function.
    const handleSubmit = (event) => {
        console.log('Submitted!')
        event.preventDefault();
        addItem(formData);

        // This is used to reset the form after data is submitted.  It resets it to the starting values.
        setFormData({ product: "", quantity: 0 })
    }

    return (
        <form>
            
            <h1>Product is: {formData.product} and Quantity is: {formData.quantity}</h1>

            <label htmlFor="product">Product Name</label>
            {/* We use the value property to bind the data from state to the element */}
            <input type="text" placeholder="product name" name="product" id="product" onChange={ handleChange }
            value={formData.product}/>

            <label htmlFor="quantity">Quantity</label>

            {/* We use the value property to bind the data from state to the element */}
            <input type="number" placeholder="quantity" name="quantity" id="quantity" onChange={ handleChange }
            value={formData.quantity}/>

            <button>Add Item</button>
        </form>
    )
}

export default ShoppingListForm;