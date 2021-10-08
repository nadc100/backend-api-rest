const express = require('express');
const path = require('path');
const app = express();
const morgan= require('morgan');
const port = 3000;
const cors = require('cors');
const conexion = require('../db')

app.use(morgan('dev'));
app.use(express.json());
app.use(db)
app.set('views', path.join(__dirname, 'views'));


async function listDatabases(conexion){
    databasesList = await conexion.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });