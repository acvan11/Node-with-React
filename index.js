const express = require('express'); // import Express library
const app = express(); // app object sets up configuration
//that will listen for incoming request

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

app.listen(5000);