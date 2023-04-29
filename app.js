const express = require('express');
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shoproutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shoproutes)

app.listen(3001);
