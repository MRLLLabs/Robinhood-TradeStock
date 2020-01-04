const db = require('./models.js').default;

function getAllCustomers(req, res, next) {
  console.log('here');
  db.any('select * from customer')
    .then((data) => {
    })
    .catch((err) => {
      console.log(err);
    });
}

function getCustomerFromTranactions(req, res, next) {
  db.query(`select * from transactions where user_id=${req.body.id}`)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function buyStock(req, res, next) {
  db.query('insert into transactions(stock_id, user_id, transaction_type, transation_date, quantity, total_price)' +
    `values('${req.body.stock_id}', '${req.body.user_id}', '${req.body.transaction_type}', '${req.body.transation_date}', '${req.body.quantity}', '${req.body.total_price}')`, req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateStock(req, res, next) {
  db.none('update transactions set total_price = 400 where stock_id=2000',
    req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
}


function deleteTransaction(req, res, next) {
  db.none('delete from transactions where (select stock_id=2000 from transactions Limit 1)',
    req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  getAllCustomers,
  buyStock,
  getCustomerFromTranactions,
  updateStock,
  deleteTransaction,
};
