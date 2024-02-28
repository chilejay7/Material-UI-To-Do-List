import { useState } from "react";

function SignUpForm() {

    const [formData, setFormData] = useState({ firstName: "", lastName: "" })

    const handleChange = (event) => {
        console.log(firstName, lastName)
        const changedField = event.target.name;
        const newValue = event.target.value;
        console.log(changedField, newValue);
        setFormData(currData => {
            currData[changedField] = newValue;
            return{...currData};
        } )
    };

    return (
        <>
            <div>
                <label htmlFor="firstName" />
                <input type="text" placeholder="first name" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange } />
            </div>
            <div>
                <label htmlFor="lastName" />
                <input type="text" placeholder="last name" id="lastName" name="lastName" value={formData.lastName} onChange={ handleChange } />
                <button>Submit</button>
            </div>
        </>
    )
}

export default SignUpForm;