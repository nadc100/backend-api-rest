const express = require('express');
const dotenv = requiere('dotenv');
const connectDB = require('./db');
const cors = require("cors");
const propiedadesRoutes = require('../routes/propiedades.router');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 5000}
const corsOptions = { origin: "http://localhost:3000" };

dotenv.config({ path: './config.env' });

connectDB()

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/propiedades', propiedadesRoutes);


app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/propiedades', propiedadesRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
