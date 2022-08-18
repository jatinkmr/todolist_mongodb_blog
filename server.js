const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./DataBase');
const publicRoute = require('./Routes')

const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

app.use('/api', publicRoute);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`);
});
