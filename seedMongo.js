const faker = require('faker');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
const writer = csvWriter();

const company = () => faker.company.companyName();
const ceo = () => faker.name.findName();
const ticker = () => {
    let tickerStr = '';
    const size = Math.floor(Math.random() * (5 - 1) + 1);
    const randNum = () => Math.floor(Math.random() * (91 - 65) + 65);
    while (tickerStr.length < size) {
        tickerStr += String.fromCharCode(randNum());
    }
    return tickerStr;
};

function stocks() {
    writer.pipe(fs.createWriteStream('stocks.csv'));
    for (let i = 0; i < 10000000; i++) {
        if (i % 10000 === 0) {
            console.log(i)
        }

        const price = faker.random.number({ min: 0, max: 1000, precision: 0.01 });
        const employees = faker.random.number(500);
        const founded = faker.date.between('1945-01-01', '2010-01-01');

        writer.write({
            _id: i + 1,
            company: company(),
            ticker: ticker(),
            price: price,
            ceo: ceo(),
            employees: employees,
            founded: founded.toISOString().slice(0, 4),
        });
    }

    writer.end();
    console.log('Stocks done!');
}

function users() {
    writer.pipe(fs.createWriteStream('users.csv'));
    let counter = 8000000;
    for (let i = 0; i <= 10000000; i++) {
        const randomName = faker.name.firstName();
        const budget = faker.random.number({ min: 1000, max: 10000 });
        const age = faker.random.number({ min: 21, max: 70 });
        const phone = faker.random.number({ min: 1000000000, max: 9999999999 }).toString();
        const street = faker.address.streetAddress().split(' ').splice(1, 2).join('');
        const zip = faker.random.number({ min: 10000, max: 99999 });
        const randNumStock = Math.floor(Math.random() * (10000000 - 1) + 1);
        const stocksArr = [];
        const qty = Math.ceil(Math.random() * 10);
        for (let j = 0; j < qty; j++) {
            const stockObj = { stock: randNumStock, quantity: qty };
            stocksArr.push(stockObj);
        }

        writer.write({
            _id: i,
            name: randomName,
            budget: budget,
            age: age,
            phone: phone,
            street: street,
            zip: zip,
            stocks: JSON.stringify(stocksArr),
        });
        if (i % 100000 === 0) {
            console.log('At: ', i);
        }
    }

    writer.end();
    console.log('Users done!');
}

function transactions() {
    writer.pipe(fs.createWriteStream('transactions.csv'));
    let counter = 0;
    for (let i = 0; i < 30000000; i++) {
        let temp = (Math.random() <= 0.5) ? 1 : 2;
        const randomDate = faker.date.between('2019-01-01', '2000-12-31');
        const type = temp === 1 ? 'Buy' : 'Sell'
        const quantity = faker.random.number({ min: 1, max: 100 });
        const price = faker.random.number({ min: 500, max: 10000 });
        const randNumUser = Math.floor(Math.random() * (10000000 - 1) + 1);
        const randNumStock = Math.floor(Math.random() * (10000000 - 1) + 1);

        writer.write({
            _id: counter++,
            date: randomDate.toISOString(),
            stock_id: randNumStock,
            type: type,
            by_user: randNumUser,
            quantity: quantity,
            price_total: price,
        });
    }

    writer.end();
    console.log('Transactions done!');

}

stocks();
users();
transactions();