const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { Users, Stocks } = require('./database.js');


app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/tradestock/api/:id', (req, res) => {
  const companyId = path.basename(req.url);
  const body = {};
  const userId = Math.floor(Math.random() * (21 - 1) + 1);

  Users.findOne({ where: { id: userId }, raw: true })
    .then((result) => body.user = result)
    .then(() => Stocks.findOne({ where: { id: companyId }, raw: true }))
    .then((result) => {
      if (!result) {
        res.status(404);
        res.send('No Company Found');
      } else {
        body.stock = result;
        res.send(body);
      }
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});

app.post('/tradestock/user/deposit', (req, res) => {
  console.log(req.body);
  const { amount, userId } = req.body;
  Users.findOne({ where: { id: userId }, raw: true })
    .then((response) => {
      const funds = Number(amount) + Number(response.funds);
      Users.update(
        { funds },
        { returning: true, where: { id: userId } },
      )
        .then(() => {
          Users.findOne({ where: { id: userId }, raw: true })
            .then((results) => res.send(results));
        })
        .catch((err) => {
          res.status(404);
          res.send(err);
        });
    });
});

module.exports = app;
