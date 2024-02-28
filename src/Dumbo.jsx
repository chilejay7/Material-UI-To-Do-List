import { useState } from "react";

function generateGameboard() {
    // This will make an array that contains 5000 empty elements for testing.
    console.log("Making the new gameboard...")
    return Array(5000);
}

export default function Dumbo(){
   const [board, setBoard] = useState(generateGameboard);
   return <button>Click me to change the State</button>
}