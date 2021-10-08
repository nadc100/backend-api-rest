import User from './models/user';

export const registro = async ()=>{
    res.json('registro')
}


export const login = async ()=>{
    res.json('login')
}

export default{
    login,
    registro
}