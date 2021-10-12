const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes/proprutas');

require('dotenv').config();
const port = process.env.PORT;
const app = express();

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/propiedades', router);

app.listen(port, () => {
    console.log('server up and runnig');
});

