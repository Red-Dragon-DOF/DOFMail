/* Let's Start */
const fs = require('fs')
const express = require('express');

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	fs.createReadStream(__dirname + '/index.html').pipe(res)
	res.status(200)

	console.log("REQUEST - " + req + " / " + res)
})

app.listen(port, () => {
	console.log("RUNNING APP ON PORT::" + port);
})