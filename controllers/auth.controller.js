import User from './models/user';

export const registro = async (req, res) => {
    const {username,email,password} = req.body;

    const nuevoUsuario = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });
    const usuarioSalvado = await nuevoUsuario.save();
    const token = jwt.sing({id:usuarioSalvado},config.SECRET,{
        expiresIn: 3600
    })
};

export default{
    login
};