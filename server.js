const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes/proprutas');
const rutas = require('./routes/corrutas');
const db = require('./db');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')));

db.connect();

app.use('/correos', rutas);

app.use('/api/propiedades', router);

app.listen(process.env.PORT, () => {
  console.log('server up and runnig');
});