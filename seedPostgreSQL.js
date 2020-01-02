const faker = require('faker');
const fs = require('fs');
const csv = require('fast-csv');
const ws = fs.createWriteStream('test.csv')


function users() {
  var result = [];
  for (let i = 1; i <= 10000000; i++) {
    if (i % 1000000 === 0) {
      console.log(i)
    }

    var final = [];
    let randomName = faker.name.firstName();
    randomName.includes("'") ? randomName = randomName.split("'").slice(1).join('') : randomName;
    const budget = faker.random.number({ min: 1000, max: 10000 });
    const age = faker.random.number({ min: 21, max: 70 });
    const phone = faker.random.number({ min: 1000000000, max: 9999999999 }).toString();
    let street = faker.address.streetAddress().split(' ').splice(1, 2).toString();
    street.includes(",") ? street = street.split(",").slice(1).join('') : street;
    const zip = faker.random.number({ min: 10000, max: 99999 });

    final.push(randomName, age, phone, street, zip, budget);
    result.push(final);
  }

  csv.write(result).pipe(ws);
}

function stocks() {
  var result = [];
  for (let i = 0; i < 10000000; i++) {
    if (i % 1000000 === 0) {
      console.log(i)
    }

    var final = [];
    const randomName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15).toUpperCase();
    const price = faker.random.number({ min: 0, max: 1000, precision: 0.01 });
    let CEO = faker.name.firstName();
    CEO.includes("'") ? CEO = CEO.split("'").slice(1).join('') : CEO;
    const employees = faker.random.number(500);
    const founded = faker.random.number({ min: 1900, max: 2000 });

    final.push(randomName, price, CEO, employees, founded);
    result.push(final);
  }

  csv.write(result).pipe(ws);
}

function userStock() {
  var final = [];
  for (let i = 1; i <= 10000000; i++) {
    if (i % 10000 === 0) {
      console.log(i)
    }
    var helper = []
    const randomIdUser = Math.ceil(Math.random() * i);
    const randomIdStock = Math.ceil(Math.random() * i);
    const quantity = faker.random.number(500);

    helper.push(randomIdStock, randomIdUser, quantity);
    final.push(helper);
  }
  csv.write(final).pipe(ws);

}

function transactions() {
  var result = [];
  for (let i = 1; i < 10000000; i++) {
    if (i % 1000000 === 0) {
      console.log(i)
    }
    var final = [];
    const randomIdUser = Math.ceil(Math.random() * 9999999);
    const randomIdStock = Math.ceil(Math.random() * 9999999);
    let temp = (Math.random() <= 0.5) ? 1 : 2;
    const day = faker.random.number({ min: 1, max: 30 });
    const month = faker.random.number({ min: 1, max: 12 });
    const year = faker.random.number({ min: 1995, max: 2019 });
    const date = '' + month + '/' + day + '/' + year;
    const type = temp === 1 ? 'Buy' : 'Sell'
    const sum = faker.random.number({ min: 1, max: 100 });
    const price = faker.random.number({ min: 500, max: 10000 });

    final.push(randomIdStock, randomIdUser, type, date, sum, price);
    result.push(final);
  }
  csv.write(result).pipe(ws);

}

users();
stocks();
transactions();
userStock();