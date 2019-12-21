var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/sdc';
var db = pgp(connectionString);

function getAllCustomers(req, res, next) {
    console.log('here')
    db.any('select * from customer')
      .then((data) => {
      })
      .catch(function (err) {
        console.log(err)
      });
  }

  function pushCustomers(req, res, next) {
    console.log(test.name)
    db.none('insert into customer(user_name, user_age, user_phone, street, zip, budget)' +
    `values('${req.user_name}', '${req.user_age}', '${req.user_phone}', '${req.street}', '${req.zip}', '${req.budget}')`,
  req.body)
      .then(() => {
        console.log('Cool')
      })
      .catch(function (err) {
       console.log(err);
      });
  }

  function pushStocks(req, res, next) {
    db.none('insert into stock(stock_name, price, CEO, employees, founded)' +
    `values('${req.stock_name}', '${req.price}', '${req.CEO}', '${req.employees}', '${req.founded}')`,
  req.body)
      .then(() => {
        console.log('Cool stocks')
      })
      .catch(function (err) {
       console.log(err);
      });
  }

module.exports = {
    getAllCustomers: getAllCustomers,
    pushCustomers: pushCustomers,
    pushStocks: pushStocks
};