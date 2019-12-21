const models = require('./models.js')

module.exports = {
    getData: (req, res) => {
      models.find((err, data) => {
        if (err) {
          res.status(400).send();
        } else {
          res.status(200).send(data);
        }
      });
    },
    buyStock: (req, res) => {
        console.log(req)
        models.buy((err, data) => {
            if (err) {
                res.status(400).send();
            } else {
                console.log(data)
                res.status(200).send(data)
            }
            
        }, req.body)
    },
    test: (req, res) => {
        models.test((err, data) => {
            if (err) {
                res.status(400).send();
            } else {
                res.status(200).send(data)
            }
            
        }, req.body)
    },
    user: (req, res) => {
      models.findUser((err, data) => {
        if (err) {
          res.status(400).send();
        } else {
          res.status(200).send(data);
        }
      });
    },
}