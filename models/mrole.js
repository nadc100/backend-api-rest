import mongoose from 'mongoose';
const { Schema } = mongoose;

const rolSchema = new Schema({
    name: {
        rol: String
    }
});

// compile our model
const Rol = mongoose.model('Rol', rolSchema);

module.export = Rol;