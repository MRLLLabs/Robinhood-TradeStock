const mongoose = require('mongoose');

const
  { Schema } = mongoose;
const Promise = require('bluebird');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/sdc', { useNewUrlParser: true });

const db = mongoose.connection;

const stockSchema = new mongoose.Schema({
  _id: Number,
  company: String,
  ticker: String,
  price: Number,
  CEO: String,
  employees: Number,
  founded: Number,
});

const transActionsSchema = new mongoose.Schema({
  _id: Number,
  date: Date,
  type: String,
  stock_id: [{ type: Number, ref: 'Stocks' }],
  user_id: [{ type: Number, ref: 'User' }],
  quantity: Number,
  price_total: Number,
});

const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  budget: Number,
  age: Number,
  phone: String,
  street: String,
  zip: Number,
  stocks: [{
    stock: {
      type: Number, ref: 'Stocks',
    },
    qty: 0,
  }],
});

const { ObjectID } = require('mongodb');

const Stocks = mongoose.model('Stocks', stockSchema);
const Transactions = mongoose.model('Transactions', transActionsSchema);
const Users = mongoose.model('Users', userSchema);

module.exports = {
  getData: (callback) => {
    Stocks.find({ _id: '700000' }, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

  buy: (callback, data) => {
    Stocks.findByIdAndUpdate({ _id: '5dfbdd2c1598ff138ebb3a88' }, { $inc: { qty: 20 } }, { new: true }, (err, data) => {
      if (err) {
        callback(err);
      }
      callback(null, data);
    });
  },
  stocks: (fakeData) => {
    Stocks.insertMany([fakeData], (err) => {
    });
  },
  users: (fakeData) => {
    Users.insertMany([fakeData], (err) => {
      if (err) console.log('Error');
    });
  },

  find: () => {
    Users.find({}, (err, data) => {
      if (err) {
        callback(err);
      } else {
        console.log(data);
      }
    });
  },
  test: (callback) => {
    Stocks.find({}).then((data) => {
      const x = Math.floor((Math.random() * data.length) + 1);
      const randAmount = Math.floor((Math.random() * 100) + 1);
      Users.create(callback).then((dom) => {
        const obj = { stock: data[x], qty: randAmount };
        dom.stocks.push(obj);
        dom.save(callback);
      });
    });
  },
  transactions: (info) => {
    Stocks.find({}).then((data) => {
      const x = Math.floor((Math.random() * data.length) + 1);
      Users.find({}).then((user) => {
        const y = Math.floor((Math.random() * user.length) + 1);
        Transactions.create(info).then((dom) => {
          dom.stock_id.push(data[x]);
          dom.user_id.push(user[y]);
          dom.save(info);
        })
          .catch((err) => {
            console.log(err);
          });
      });
    })
      .catch((err) => {
        res.status(500);
      });
  },
  findUser: (callback) => {
    Transactions.findOne({ price_total: '6357' })
      .exec((err, person) => {
        if (err) {
          callback(err);
        } else {
          console.log(person);
          callback(null, person);
        }
      });
  },
};
