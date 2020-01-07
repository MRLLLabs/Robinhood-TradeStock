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

module.exports = pool;
