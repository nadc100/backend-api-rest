const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const path = require('path');
const rutaspropiedades = require('../routes/proprutas');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindandModify: true,
    useCreateIndex: true
}).then(() => console.log(`MongoDB Connected: ${conn.connection.host}`).catch((err) => {
    console.log(err);
}));

app.use('/api/propiedades', rutaspropiedades);

app.listen(port, () => {
    console.log(`Server started on port: ${PORT}`);
});

