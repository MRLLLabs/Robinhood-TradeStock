const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { Users, Stocks } = require('./database.js');


app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/api/:ticker', (req, res) => {
  const ticker = path.basename(req.url);
  const body = {};
  const userId = Math.floor(Math.random() * (21 - 1) + 1);

  Users.findOne({ where: { id: userId }, raw: true })
    .then((result) => body.user = result)
    .then(() => Stocks.findOne({ where: { ticker }, raw: true }))
    .then((result) => {
      body.stock = result;
      res.send(body);
    })
    .catch((err) => {
      res.status(400);
      res.send(err);
    });
});

// app.listen(port, () => {
//   console.log(`listening on port: ${port}`);
// });

module.exports = app;
