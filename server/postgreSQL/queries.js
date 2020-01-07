const Pool = require('pg').Pool

const pool = new Pool({
  host: '3.137.2.30',
  user: 'power_user',
  password: 'Password',
  database: 'sdc',
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log(result.rows);
  });
});

function getAllCustomers(req, res, next) {
  console.log('here');
  pool.any('select * from customer')
    .then((data) => {
    })
    .catch((err) => {
      console.log(err);
    });
}

function getCustomerFromTranactions(req, res, next) {
  pool.query(`select * from transactions where user_id=${req.params.id}`)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function buyStock(req, res) {
  pool.query('insert into transactions(stock_id, user_id, transaction_type, transation_date, quantity, total_price)' +
   `values('${req.body.stock_id}', '${req.body.user_id}', '${req.body.transaction_type}', '${req.body.transation_date}', '${req.body.quantity}', '${req.body.total_price}')`, [])
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateStock(req, res, next) {
  pool.none('update transactions set total_price = 400 where stock_id=2000',
    req.body)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
//delete from transactions where (select stock_id=1000 from transactions)

function deleteTransaction(req, res, next) {
  pool.query('delete from transactions where stock_id=1000',
    [])
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
