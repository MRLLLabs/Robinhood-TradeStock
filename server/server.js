const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { Users, Stocks } = require('./database.js');
const path = require('path');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/api/:ticker', (req, res) => {
    let ticker = path.basename(req.url);
    console.log(ticker)
    let body = {};
    let userId = Math.floor(Math.random() * (21 - 1) + 1);

    Users.findOne({where: {id: userId}, raw: true})
    .then((result) => body.user = result)
    .then(() => Stocks.findOne({where: {ticker: ticker}, raw: true}))
    .then((result) => {
        body.stock = result;
        res.send(body);
    })
    .catch((err) => {
        res.status(400);
        res.send(err);
    })
})

app.listen(port, () => {
    console.log('listening on port: '+ port);
})