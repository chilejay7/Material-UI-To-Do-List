import {useState, useEffect} from 'react';
const randomQuoteURL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';


export default function QuoteFetcher() {
    // This needs to be set to an empty object because the data returned from the API will be an object.
    const [quote, updateQuote] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    // This is used to set a quote on the initial load / first render of the page.
    useEffect(() => fetchQuote, []);

    const fetchQuote = async () => {
        const response = await fetch(randomQuoteURL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        console.log('Random Quote:', randomQuote);
        updateQuote(randomQuote);
        setIsLoading(false);
    }

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            <h1>{quote.text}</h1>
            <h2>{quote.author}</h2>
            <button onClick={fetchQuote}>Get Quote Using Handler</button>
        </div>
    )
}