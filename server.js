/* Let's Start */

const express = require('express');

const app = express()
const port = process.env.port || 3000;

app.get('/', (req, res) => {
	res.send('working!');

	console.log("REQUEST - " + req + " / " + res)
})

app.listen(port, () => {
	console.log("RUNNING APP ON PORT::" + port);
})