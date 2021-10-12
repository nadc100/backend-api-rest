const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes/proprutas');
require('dotenv').config();
console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open',()=>{
  console.log('db conectada')
})

app.use(morgan('dev'));

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }))

app.use('/api/propiedades', router);

app.use(function (req, res, next) {
  res.status(404).render('404', { url: req.originalUrl });
});

app.listen(process.env.PORT, () => {
  console.log('server up and runnig');
});