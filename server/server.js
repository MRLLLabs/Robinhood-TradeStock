const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { Users, Stocks } = require('./database.js');

var router = express.Router();

var db = require('./postgreSQL/queries.js');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/tradestock/api/', (req, res) => {
  const companyId = req.query.id ? req.query.id : '1';
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

app.get('/get', (req, res) => {
  controller.getData(req, res)
})

app.post('/buy', (req, res) => {
  controller.buyStock(req, res)
})

app.post('/test', (req, res) => {
  controller.test(req, res)
})

app.get('/user', (req, res) => {
  controller.user(req, res)
})

app.get('/customers', (req, res) => {
  db.getAllCustomers();
})

app.post('/customers/post', (req, res) => {
  db.pushCustomers(req.body, res);
})

module.exports = app;
