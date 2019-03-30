const express = require('express'); // import Express library
const app = express(); // app object sets up configuration
//that will listen for incoming request

app.get('/', (req, res) => {
	res.send({ hi: there });
});

const PORT = process.env.PORT || 5000; // for heroku deployment
//if it has a port on heroku, run for that port, otherwise, the port is 5000
app.listen(PORT);