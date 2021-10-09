const Propiedad = require('./models/mpropiedades');

exports.findByID = async (req, res, next) => {
    try{
       const Propiedad= await Propiedad.findById(req.params.id).exec();
       res.send(Propiedad);
    }catch(err){
       return res.status(500).send({
        message: err.message
      })
    }   
};