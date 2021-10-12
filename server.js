const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const path = require('path');
const rutaspropiedades = require('./routes/rpropiedades');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/propiedades', rutaspropiedades);



//middleware
app.listen(port, () => {
    console.log(`Server started on port: ${app.get('PORT')}`);
});

app.get('/', (req, res) => {
    res.send('index');
})