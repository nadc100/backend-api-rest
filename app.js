import express from'express';
import morgan from'morgan';
import propiedadesRoutes from './routes/propiedades.router.js';


app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/propiedades', propiedadesRoutes)
app.use('/api/auth', authRoutes)

export default app;