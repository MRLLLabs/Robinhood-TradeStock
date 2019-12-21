const faker = require('faker');
// const Promise = require('bluebird');
const db = require('./queries.js');

function users() {
    var final = [];
    for (let i = 0; i < 1; i ++) {
        if (i % 10000 === 0) {
            console.log(i)
        }
        const randomName = faker.name.firstName();
        const budget = faker.random.number({min: 1000, max: 10000});
        const age = faker.random.number({min: 21, max: 70});
        const phone = faker.random.number({min: 1000000000, max: 9999999999}).toString();
        const street = faker.address.streetAddress().split(' ').splice(1, 2).join('');
        const zip = faker.random.number({min: 10000, max: 99999});

        final.push(db.pushCustomers({
            user_name: randomName,
            user_age: age,
            user_phone: phone,
            street: street,
            zip: zip,
            budget: budget,
        }));
    }
    console.log('DONE')
    // console.log('Users done')
    // return Promise.all(final);
}

function stocks() {
  var final = [];
  for (let i = 0; i < 1; i ++) {
    if (i % 10000 === 0) {
        console.log(i)
    }
    const randomName = faker.name.firstName().slice(0, 7).toUpperCase();
    const price = faker.random.number({min: 0, max: 1000, precision:0.01});
    const CEO = faker.name.firstName();
    const employees = faker.random.number(500);
    const founded = faker.random.number({min: 1900, max: 2000});

    final.push(db.pushStocks({
        stock_name: randomName,
        price: price,
        CEO: CEO,
      employees: employees,
      founded: founded,
    }));
  }
  console.log('Stocks done')
//   return Promise.all(final);
}

// users();
stocks();