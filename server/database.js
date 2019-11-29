const Sequelize = require('sequelize');

const sequelize = new Sequelize('robinhood', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=> console.log('db connect'))

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    funds: {
        type: Sequelize.FLOAT
    },
    shares: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

const Stocks = sequelize.define('stocks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ticker: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.FLOAT
    }
}, {
    timestamps: false
})

Users.sync();
Stocks.sync();

module.exports = {
    Users: Users,
    Stocks: Stocks
};