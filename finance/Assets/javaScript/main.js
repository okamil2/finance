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