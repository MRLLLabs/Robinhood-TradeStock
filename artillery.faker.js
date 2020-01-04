
const faker = require('faker');

function generateGetData(data, events, done) {
  // generate data with Faker:
  const randomIdUser = Math.ceil(Math.random() * 9999999);
  // add variables to virtual user's context:
  data.vars.randomIdUser = randomIdUser;
  // continue with executing the scenario:
  return done();
}

function generatePostData(data, events, done) {
  // generate data with Faker:
  const randomIdStock = Math.ceil(Math.random() * 9999999);
  const temp = (Math.random() <= 0.5) ? 1 : 2;
  const day = faker.random.number({ min: 1, max: 30 });
  const month = faker.random.number({ min: 1, max: 12 });
  const year = faker.random.number({ min: 1995, max: 2019 });
  const date = `${month}/${day}/${year}`;
  const type = temp === 1 ? 'Buy' : 'Sell';
  const sum = faker.random.number({ min: 1, max: 100 });
  const price = faker.random.number({ min: 500, max: 10000 });
  const randomIdUser = Math.ceil(Math.random() * 9999999);
  // add variables to virtual user's context:
  data.vars.user_id = randomIdUser;
  data.vars.stock_id = randomIdStock;
  data.vars.transaction_type = type;
  data.vars.transation_date = date;
  data.vars.quantity = sum;
  data.vars.total_price = price;
  // continue with executing the scenario:
  return done();
}

module.exports = {
  generateGetData,
  generatePostData,
};
