import express from'express';
import { get } from 'mongoose';
import morgan from'morgan';

app.use(morgan('dev'));

app.use(express.json());

app-get('/',(req,res)=>{
    res.send('Bienvenido a MobiliariaIN!')
})

app.use('/api/propiedades', propiedadesRoutes)
app.use('/api/auth', authRoutes)

export default app;