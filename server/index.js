const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('../database/dbMethods.js');

const app = express();
const port = 3002;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/api/rooms/:id', controllers.getListing);
app.get('/api/rooms/:id/unavailable_dates', controllers.getUnavailableDates);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
