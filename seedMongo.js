const faker = require('faker');
const Promise = require('bluebird');
const Models = require('./server/mongo/models.js');

function stocks() {
  var final = [];
  for (let i = 0; i < 100000; i ++) {
    if (i % 10000 === 0) {
        console.log(i)
    }
    const randomName = faker.name.firstName().slice(0, 7).toUpperCase();
    const price = faker.random.number({min: 0, max: 1000, precision:0.01});
    const CEO = faker.name.firstName();
    const employees = faker.random.number(500);
    const founded = faker.random.number({min: 1900, max: 2000});

    final.push(Models.stocks({
      name: randomName,
      price: price,
      CEO: CEO,
      employees: employees,
      founded: founded,
    }));
  }
//   console.log('Stocks done')
//   return Promise.all(final);
}

function users() {
    var final = [];
    for (let i = 0; i < 100000; i ++) {
        if (i % 10000 === 0) {
            console.log(i)
        }
        const randomName = faker.name.firstName();
        const budget = faker.random.number({min: 1000, max: 10000});
        const age = faker.random.number({min: 21, max: 70});
        const phone = faker.random.number({min: 1000000000, max: 9999999999}).toString();
        const street = faker.address.streetAddress().split(' ').splice(1, 2).join('');
        const zip = faker.random.number({min: 10000, max: 99999});

        final.push(Models.test({
            name: randomName,
            budget: budget,
            age: age,
            phone: phone,
            street: street,
            zip: zip,
        }));
    }

}

function transactions() {
    var final = [];
    for (let i = 0; i < 100000; i ++) {
        if (i % 10000 === 0) {
            console.log(i)
        }
        let temp = (Math.random() <= 0.5) ? 1 : 2;
        const randomDate = faker.date.between('2019-01-01', '2000-12-31');
        const type = temp === 1 ? 'Buy' : 'Sell'
        const quantity = faker.random.number({min: 1, max: 100});
        const price = faker.random.number({min: 500, max: 10000});

        final.push(Models.transactions({
            date: randomDate,
            type: type,
            quantity: quantity,
            price_total: price,
        }));
    }
   
}

stocks();
users();
transactions();