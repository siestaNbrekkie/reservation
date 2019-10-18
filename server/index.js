const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('../database/dbMethods.js');

const app = express();
const port = 3000;

app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/api/rooms/:id', controllers.getListing);
app.get('/api/rooms/:id/dates', controllers.getDates);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
