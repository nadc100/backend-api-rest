const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const connectDB = require('./db')
const app = express()
app.use(morgan('dev'))
connectDB()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use('/propiedades', require('./routes/rpropiedades'))
app.use('/', require('./routes/rauth'))
app.use('/', require('./routes/rusers'))

app.listen(4000,console.log(`Server running`)
)