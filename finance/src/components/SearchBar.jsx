import React, {useState} from "react";


const url = 'https://alpha-vantage.p.rapidapi.com/query?keywords=microsoft&function=SYMBOL_SEARCH&datatype=json';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8029dba5b2msh35735ac5d9c3e91p1b8435jsnb0b273d596ab',
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((name) => {
                return value 
                && name 
                && name.name.toLowerCase().includes(value)
            });
            setResults(results);
        });
        

    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }



    return <div className="input-wrapper">
        <input 
        placeholder="Search Stock" 
        value = {input}
        onChange={(e) => handleChange(e.target.value)}
        />
    </div>
}