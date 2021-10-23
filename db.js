const mongoose = require('mongoose');
require('dotenv').config();
module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect(process.env.MONGODB_URI, 
          {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            dbname: 'mobiliariain'
          }).then(connection => {
            this.connection = connection;
            console.log('Conexion a DB exitosa');
        }).catch(err => console.log(err))
    }
  }
  