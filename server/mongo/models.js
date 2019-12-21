var mongoose = require('mongoose'), Schema = mongoose.Schema;
const Promise = require('bluebird')

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/playing', {useNewUrlParser: true});

var db = mongoose.connection;

var stockSchema = new mongoose.Schema({
    name: String,
    price: Number,
    CEO: String,
    employees: Number,
    founded: Number
  });

  var transActionsSchema = new mongoose.Schema({
      date: Date,
      type: String,
      stock_id: [{ type: Schema.Types.ObjectId, ref: 'Stocks' }],
      user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      quantity: Number,
      price_total: Number
  });

  var userSchema = new mongoose.Schema({
      name: String,
      budget: Number,
      age: Number,
      phone: String,
      street: String,
      zip: Number,
      stocks: [{
          stock: {
              type: Schema.Types.ObjectId, ref: 'Stocks' 
            },
          qty: 0
        }]
  })

  var ObjectID = require('mongodb').ObjectID;

  var Stocks = mongoose.model('Stocks', stockSchema);
  var Transactions = mongoose.model('Transactions', transActionsSchema);
  var Users = mongoose.model('Users', userSchema);

 module.exports = {
    getData: (callback) => {
        Stocks.find({}, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    },

    buy: (callback, data) => {
        Stocks.findByIdAndUpdate({_id: '5dfbdd2c1598ff138ebb3a88'}, {$inc:{qty: 20}}, {new: true}, (err, data) => {
            if (err) {
                callback(err)
            }
            callback(null, data)
        });
             
    },
    stocks: (fakeData) => {
        Stocks.insertMany([fakeData], (err) => {
        })
    }, 
    users: (fakeData) => {
        Users.insertMany([fakeData], (err) => {
            if (err) console.log('Error')
        })
    },
  
    find: () => {
        Users.find({}, (err, data) => {
            if (err) {
                callback(err)
            } else {
                console.log(data)
            }
        })
    },
    test: (callback) => {
         Stocks.find({}).then((data) => {
            var x = Math.floor((Math.random() * data.length) + 1);
            var randAmount = Math.floor((Math.random() * 100) + 1);
             Users.create(callback).then((dom) => {
                let obj = {stock: data[x], qty: randAmount}
                 dom.stocks.push(obj);
                 dom.save(callback)
            })
        })
    },
    transactions: (info) => {
         Stocks.find({}).then((data) => {
            var x = Math.floor((Math.random() * data.length) + 1);
            Users.find({}).then((user) => {
                var y = Math.floor((Math.random() * user.length) + 1);
             Transactions.create(info).then((dom) => {

                 dom.stock_id.push(data[x]);
                 dom.user_id.push(user[y]);
                 dom.save(info)
             })
             .catch(err => {
              console.log(err);
              });
            })
        })
        .catch(err => {
            res.status(500);
          });
    },
    findUser: (callback) => {
        
        Transactions.findOne({ price_total: '6357' })
        .exec(function(err, person) {
            if (err) {
            } else {
                console.log(person)
                callback(null, person);
            }
        });
    }
}