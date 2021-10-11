const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const rutaspropiedades = require('./rutas/rutaspropiedades');
const app = express();
const conn = require('./db');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(conn);

//rutas
app.use('/propiedades', rutaspropiedades);

app.set('PORT', process.env.PORT || 3000 );

//middleware
app.listen(app.get('PORT'), () => {
    console.log(`Server started on port: ${app.get('PORT')}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
})