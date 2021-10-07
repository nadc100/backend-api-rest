import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://nadc100:Meshugah2022***@cluster0.mtmzz.mongodb.net/mobiliariain?retryWrites=true&w=majority')
.then(db=>console.log('Database connected!'))
.catch(error=>console.log(error))


