const express = require("express");
const morgan = require('morgan');
const connectDB = require('./db');
const userRutas = require('./routes/user.routes');
const app = express();
app.use(morgan('dev'));
app.use('/',userRutas)
app.listen(5000, () => {
	console.log("Server has started!")
});