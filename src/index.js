const express=require('express');
const app=express();
const cors = require("cors");
const propiedadesRoutes = require('../routes/propiedades.router');
const database = require('../db')
const morgan = require('morgan');

app.use(morgan('dev'));
   
app.use(express.urlencoded({extended: true})); 

app.use(express.json()); 

app.use('/propiedades', propiedadesRoutes);

let corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/propiedades',propiedadesRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});