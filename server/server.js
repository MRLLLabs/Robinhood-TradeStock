const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(port, () => console.log('listening on port: '+ port))